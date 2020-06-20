import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentScreen = () => {

    const myName = "Javier Amaya"

    return (
        <View>
            <Text style={styles.textStyle}> Que pedos payo :v</Text>
            <Text style={styles.subHeaderStylee}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    } ,
    subHeaderStylee:{
        fontSize:20
    }
});

export default ComponentScreen;