import React from 'react';
import { FlatList, Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaIngrediente: string;
    image: any;
}

function linkExterno(){
    Linking.openURL('https://github.com/Flips69/BurguerJoy');
}

const dados: Item[] = [
    {id: "1", nome: "Incendiary Burguer", preco: "Preço: R$32,99",listaIngrediente: "Ingredientes: Pão brioche, 2 hambúrgueres de carne bovina(150g), alface, cheddar, bacon e molho de pimenta", image: require('./assets/images/burguer1.png')},
    {id: "2", nome: "Hunter's Fury", preco: "Preço: R$36,59", listaIngrediente: "Ingredientes: Pão australiano, 2 hambúrgueres de carne bovina(150g), alface, tomate, cebola caramelizada, cheddar, ovo frito e bacon", image: require('./assets/images/burguer2.png')},
    {id: "3", nome: "Viper's Pit", preco: "Preço: R$32,99", listaIngrediente: "Ingredientes: Pão brioche verde, 1 hambúrguer de carne bovina(200g), tomate, mussarela, cheddar e bacon", image: require('./assets/images/burguer3.png')},
    {id: "4", nome: "Empress", preco: "Preço: R$30,99", listaIngrediente: "Ingredientes: Pão brioche rosa, 1 hambúrguer de carne bovina ou toscana(150g), abacate, cebola roxa, tomate, mussarela e maionese de bacon", image: require('./assets/images/burguer4.png')},
    {id: "5", nome: "Rolling Thunder", preco: "Preço: R$41,99", listaIngrediente: "Ingredientes: Pão brioche, 3 hambúrgueres de carne bovina(150g), bacon, cheddar e molho verde", image: require('./assets/images/burguer5.png')},
    {id: "6", nome: "From the Shadow", preco: "Preço: R$30,99", listaIngrediente: "Ingredientes: Pão brioche preto, 2 hambúrgueres de carne bovina(150g), bacon, alface, tomate, picles, cebola roxa, maionese de bacon e cheddar", image: require('./assets/images/burguer6.png')},
    {id: "7", nome: "Showstopper", preco: "Preço: R$27,99", listaIngrediente: "Ingredientes: Pão brioche vermelho, 1 hambúrguer de carne bovina (200g), cebola empanada, cheddar, alface, tomate e bacon", image: require('./assets/images/burguer7.png')},
    {id: "8", nome: "Seekers", preco: "Preço: R$26,99", listaIngrediente: "Ingredientes: Pão brioche, frango empanado, anéis de cebola, maionese de bacon e molho especial", image: require('./assets/images/burguer8.png')},
    {id: "9", nome: "Blade Storm", preco: "Preço: R$28,99", listaIngrediente: "Ingredientes: Pão brioche azul, 2 hambúrgueres de carne bovina(150g), cebola caramelizada, cheddar, picles e bacon", image: require('./assets/images/burguer9.png')},
    {id: "10", nome: "Nebula", preco: "Preço: R$29,99", listaIngrediente: "Ingredientes: Pão colorido, 1 hambúrguer de carne bovina(150g), 3 linguiças, cheddar, picles e cebola caramelizada", image: require('./assets/images/burguer10.png')},
    {id: "11", nome: "Tour de Force", preco: "Preço: R$21,99", listaIngrediente: "Ingredientes: Pão de forma, 2 ovos fritos, presunto(200g), mostarda dijon e queijo gruyère", image: require('./assets/images/burguer11.png')},
    {id: "12", nome: "Nightfall", preco: "Preço: R$23,99", listaIngrediente: "Ingredientes: Pão turco(Ramazin Pidesi), carne desfiada(400g), alface, cebola, tomate e batata frita", image: require('./assets/images/burguer12.png')},
    {id: "13", nome: "Annihilation", preco: "Preço: R$41,99", listaIngrediente: "Ingredientes: Pão brioche, 3 hambúrgueres de carne bovina(200g), bacon, tomate, alface, cheddar, 2 ovos fritos e cebola caramelizada", image: require('./assets/images/burguer13.png')},
    {id: "14", nome: "Owl Burguer", preco: "Preço: R$28,99", listaIngrediente: "Ingredientes: Pão brioche, frango empanado, cebola roxa, picles, molho especial e bacon", image: require('./assets/images/burguer14.png')},
    {id: "15", nome: "JoyZe(Combo Casal)", preco: "Preço: R$51,99", listaIngrediente: "Ingredientes: 2 Lanches do cardápio a sua escolha(Exceto os lanches com 3 hambúrgueres), de acompanhamento uma porção média de batata frita com cheddar e bacon", image: require('./assets/images/burguer15.png')},
];

const renderItem = ({ item }: {item:Item} ) => (
    <TouchableOpacity style={ styles.item }>
        <Text style={[styles.itemText, styles.itemTextTitle]}>{ item.nome }</Text>
        <Image style={styles.image} source={item.image}/>
        <Text style={styles.itemText}>{ item.preco }</Text>
        <Text style={styles.itemText}>{ item.listaIngrediente }</Text>
        <TouchableOpacity><Image source={require('./assets/images/adicionar.png')} style={styles.add}></Image></TouchableOpacity>
        
    </TouchableOpacity>
)

function TelaLanchonete(): React.JSX.Element {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground style={styles.headerGradient} source={require('./assets/images/Gradient.png')}>
                <Text style={styles.headerText}>❀ JoyBurguer ❀</Text>
                </ImageBackground>
            </View>

            
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={dados}
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