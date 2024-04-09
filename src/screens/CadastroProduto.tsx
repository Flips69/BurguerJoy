import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroProduto: React.FC = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem', {
            uri:imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.209:8000/api/produtos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }catch(error) {
        console.log(error);
    }
    }

    const abrirCamera = () => {
        const options = {
            mediaType:'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }
            else if(response.error){
                console.log('erro ao abrir a camera');
            }
            else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false, 
            maxHeight: 2000,
            maxWidht: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageBackground style={styles.headerGradient} source={require('../assets/images/Gradient.png')}>
                <Text style={styles.headerText}>Cadastro ❀ Produtos</Text>
            </ImageBackground>
            </View>

            <ScrollView>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do Produto"
                    placeholderTextColor={'#e0aaff'}
                    value={nome}
                    onChangeText={setNome} />

                <TextInput style={styles.input}
                    placeholder="Preço"
                    placeholderTextColor={'#e0aaff'}
                    value={preco}
                    onChangeText={setPreco} />

                <TextInput style={styles.input}
                    placeholder="Ingredientes"
                    placeholderTextColor={'#e0aaff'}
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline />

                    <View style={styles.alinhamentoImagensSelecionada}>
                        {imagem ? <Image source={{uri:imagem}} style={styles.imagemSelecionado} /> : null}
                    </View>

                    <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                        <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                        <Text style={styles.imageButtonText}>Tirar Foto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imageButton} onPress={cadastrarProduto}>
                        <Text style={styles.imageButtonText}>Cadastrar Produto</Text>
                    </TouchableOpacity>

            </View>

            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                <Image
                        source={require('../assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                        source={require('../assets/images/pedidos.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                        source={require('../assets/images/perfil.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                <Image
                        source={require('../assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#10002b',
        flex: 1
    }, 
    header: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    }, 
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e0aaff',
        fontFamily: 'serif',
    },
    form: {
        backgroundColor: '#240046',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#e0aaff',
        marginTop: 90
    },
    input: {
        height: 40,
        borderColor: '#ffd6ff',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#e0aaff'
    },
    imageButton: {
        backgroundColor: '#9d4edd',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop:10

    },
    imageButtonText: {
        color: '#e0aaff',
        fontWeight: 'bold',
        fontSize: 14.69,
        fontFamily: 'serif'
    },
    imagemSelecionado: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagensSelecionada: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    headerGradient: {
        width: 500,
        height: 45,
        alignItems: 'center'
    },footer: {
        borderTopWidth: 0.1,
        backgroundColor: '#9d4edd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 6,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    footerIcon: {
            width: 30,
            height: 30,
    },






});

export default CadastroProduto;