import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaIngrediente: string;
    image: any;
}

const dados: Item[] = [
    {id: "1", nome: "Incendiary Burguer", preco: "R$29,99",listaIngrediente: "Pão brioche, 2 hambúrgueres de carne bovina(150g), alface, cheddar, bacon e molho de pimenta", image: require('./assets/images/burguer1.png')},
    {id: "2", nome: "Hunter's Fury", preco: "R$36,59", listaIngrediente: "Pão australiano, 2 hambúrgueres de carne bovina(150g), alface, tomate, cebola caramelizada, cheddar, ovo frito e bacon", image: require('./assets/images/burguer2.png')},
    {id: "3", nome: "Viper's Pit", preco: "R$32,99", listaIngrediente: "Pão brioche verde, 1 hambúrguer de carne bovina(200g), tomate, mussarela, cheddar e bacon", image: require('./assets/images/burguer3.png')},
    {id: "4", nome: "Empress", preco: "R$30,99", listaIngrediente: "Pão brioche rosa, 1 hambúrguer de carne bovina ou toscana(150g), abacate, cebola roxa, tomate, mussarela e maionese de bacon", image: require('./assets/images/burguer4.png')},
    {id: "5", nome: "Rolling Thunder", preco: "41,99", listaIngrediente: "Pão brioche, 3 hambúrgueres de carne bovina(150g), bacon, cheddar e molho verde", image: require('./assets/images/burguer5.png')},
    {id: "6", nome: "From the Shadow", preco: "30,99", listaIngrediente: "Pão brioche preto, 2 hambúrgueres de carne bovina(150g), bacon, alface, tomate, picles, cebola roxa, maionese de bacon e cheddar", image: require('./assets/images/burguer6.png')},
    {id: "7", nome: "Showstopper", preco: "27,99", listaIngrediente: "Pão brioche vermelho, 1 hambúrguer de carne bovina (200g), cebola empanada, cheddar, alface, tomate e bacon", image: require('./assets/images/burguer7.png')},
    {id: "8", nome: "Seekers", preco: "26,99", listaIngrediente: "Pão brioche, frango empanado, anéis de cebola, maionese de bacon e molho especial", image: require('./assets/images/burguer8.png')},
    {id: "9", nome: "Blade Storm", preco: "", listaIngrediente: "", image: require('./assets/images/burguer9.png')},
    {id: "10", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer10.png')},
    {id: "11", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer11.png')},
    {id: "12", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer12.png')},
    {id: "13", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer13.png')},
    {id: "14", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer14.png')},
    {id: "15", nome: "", preco: "", listaIngrediente: "", image: require('./assets/images/burguer15.png')},
];

const renderItem = ({ item }: {item:Item} ) => (
    <TouchableOpacity style={ styles.item }>
        <Text style={styles.itemText}>{ item.nome }</Text>
        <Text style={styles.itemText}>{ item.preco }</Text>
        <Text style={styles.itemText}>{ item.listaIngrediente }</Text>
        <Image style={styles.image} source={item.image}/>
    </TouchableOpacity>
)

function TelaLanchonete(): React.JSX.Element {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>BurguerJoy</Text>
            </View>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>

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
        borderWidth: 1,
        borderColor: '#e0aaff'
    },
    header: {
        backgroundColor: '#3c096c',
        alignItems: 'center',
        paddingVertical: 30
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#e0aaff',
        fontFamily: 'serif'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
            width: 30,
            height: 30
    },
    image: {
        width: 150,
        height: 150,
    },
    itemText: {
        color: 'white',
        fontFamily: 'serif'
    }
});

export default TelaLanchonete;