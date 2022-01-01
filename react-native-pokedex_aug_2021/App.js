import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from './components/PokemonDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setPokemonList(data.results)
        }
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <NavigationContainer style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Pokemon List"
            children={({ navigation }) => {
              return <PokemonList list={pokemonList} navigation={navigation} />
            }}
          />
          {/* <Stack.Screen name="Pokemon List" component={PokemonList} /> */}
          <Stack.Screen name="Pokemon Details" component={PokemonDetails} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    width: "100%"
  }
});
