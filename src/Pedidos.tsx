import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Item {
    id: string;
    nome: string;
    preco: string;
    image: any;
}

const dados: Item[] = [
    {id: "1", nome: "Incendiary Burguer", preco: "Preço: R$32,99", image: require('./assets/images/burguer1.png')},
    {id: "15", nome: "Incendiary Burguer", preco: "Preço: R$32,99", image: require('./assets/images/burguer1.png')},
]

function Pedidos(): React.JSX.Element {
    return(
        <View>

        </View>
    );
}

const styles = StyleSheet.create ({

});

export default Pedidos