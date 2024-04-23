import React from 'react';
import TelaLanchonete from './src/TelaLanchonete';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='TelaLanchonete'
        component={TelaLanchonete}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='CadastroProduto'
        component={CadastroProduto}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='CadastroCliente'
        component={CadastroCliente}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;