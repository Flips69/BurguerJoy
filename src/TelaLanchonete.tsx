import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Produto {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    //image: any;
}

function linkExterno(){
    Linking.openURL('https://github.com/Flips69/BurguerJoy');
}

const renderItem = ({ item }: {item:Produto} ) => (
    <TouchableOpacity style={ styles.item }>
        <Text style={[styles.itemText, styles.itemTextTitle]}>{ item.nome }</Text>
        {/*<Image source={item.image} style={styles.image} />*/}
        <Text style={styles.itemText}>{ item.preco }</Text>
        <Text style={styles.itemText}>{ item.ingredientes }</Text>
       { <TouchableOpacity><Image source={require('./assets/images/adicionar.png')} style={styles.add}></Image></TouchableOpacity>}
        
    </TouchableOpacity>
)

function TelaLanchonete(): React.JSX.Element {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        listarProdutos();           
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.209:8000/api/produtos');

            console.log(response.data)
            if (response.status === 200) {
                setProdutos(response.data); 
                
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground style={styles.headerGradient} source={require('./assets/images/Gradient.png')}>
                <Text style={styles.headerText}>❀ JoyBurguer ❀</Text>
                </ImageBackground>
            </View>

            
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
                           
            <View style={styles.footer}>
                <TouchableOpacity>
                <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                        source={require('./assets/images/pedidos.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                        source={require('./assets/images/perfil.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.messageIcon}onPress={linkExterno}>
                <Image
                        source={require('./assets/images/message.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                        source={require('./assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10002b',
        flex: 1
    },
    item: {
        backgroundColor: '#240046',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#e0aaff'
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
        fontFamily: 'serif'
    },
    footer: {
        borderTopWidth: 0.1,
        backgroundColor: '#9d4edd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 6,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10    
    },
    footerIcon: {
            width: 30,
            height: 30
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        height: 150,
        borderWidth: 1,
        borderColor: '#e0aaff',
        borderRadius: 8
    },
    itemText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#ffd6ff',
        fontFamily: 'serif',
        fontSize: 15,
        padding: 1.69
    },
    itemTextTitle: {
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 22.69,
        fontFamily: 'arial', 
    },
    headerGradient: {
        width: 500,
        height: 45,
        alignItems: 'center'
        
    },
    messageIcon: {
        position: 'absolute',
        width: 40,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    add: {
        width: 40,
        height: 40,
        marginStart: 138.5,
        marginTop: 10
        
    },
    fotterGradient: {
        width: 500,
        alignItems: 'center'
    },
});

export default TelaLanchonete;