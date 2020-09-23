import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const ListScreen = () => {
    
    const friends= [
        {name: "Friend #1", age: 20},
        {name: "Friend #2", age: 20},
        {name: "Friend #3", age: 20},
        {name: "Friend #5", age: 20},
        {name: "Friend #6", age: 20},
        {name: "Friend #4", age: 20},
        {name: "Friend #7", age: 20},
        {name: "Friend #8", age: 20},
        {name: "Friend #9", age: 20}   
    ];


    return (
        //(item) : console.log === todas las propiedades del componente
        //{(item)} : console.log === {name: "Friend #1"}
        <FlatList 
            //horizontal  //ubica el listado en forma horizontal
            //showsHorizontalScrollIndicator = {false} // Esconde la barra horizontal que se muestra en la parte de abajo
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:10
    }
});

export default ListScreen;