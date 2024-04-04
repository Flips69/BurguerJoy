import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'axios';

const CadastroCliente: React.FC = () => {

    const [foto, setFoto] = useState<any>('');
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const cadastrarCliente = async () => {
        try{
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('telefone', telefone);
            formData.append('endereco', endereco);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('foto', {
                uri:foto,
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

    const selecionarFoto = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false, 
            maxHeight: 2000,
            maxWidht: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('Cancelado pelo usuário');
            } else if(response.error) {
                console.log('Erro ao abrir a galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri);
            }
        });
}

return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'black'} barStyle={"light-content"}/>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cadastro Cliente</Text>
        </View>
        <View style={styles.form}>
        <View style={styles.alinhamentoFotosSelecionada}>
                        {foto ? <Image source={{uri:foto}} style={styles.fotoSelecionada} /> : null}
        </View>

        <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                        <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                    </TouchableOpacity>

        <TextInput style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome} />
        <TextInput style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone} />
        <TextInput style={styles.input}
                    placeholder="Endereco"
                    value={endereco}
                    onChangeText={setEndereco} />
        <TextInput style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail} />
        <TextInput style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    form: {
        padding: 10,
        backgroundColor: 'purple',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    alinhamentoFotosSelecionada: {
        alignItems: 'center'
    },
    fotoSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop:10

    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionado: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },

});



export default CadastroCliente;