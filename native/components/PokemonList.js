import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

export default function PokemonList(props) {
    return (
        <ScrollView>
            {props.list.map((pokemon, i) => {
                return (
                    <TouchableHighlight
                        key={i}
                        underlayColor="lightblue"
                        onPress={() => {
                            props.navigation.navigate("Pokemon Details", { pokemon })
                        }}
                    >
                        <View style={styles.pokemon}>
                            <Text style={{ fontSize: 20 }}>
                                {pokemon.name}
                            </Text>
                        </View>
                    </TouchableHighlight>
                )
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    pokemon: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    }
})