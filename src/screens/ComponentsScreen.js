import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacit} from "react-native";

const ComponentScreen = () => {

    const myName = "Javier Amaya"

    return (
        <View>
            <Text style={styles.textStyle}> Que pedos payo :v</Text>
            <Text style={styles.subHeaderStylee}>My name is {myName}</Text>

            <Button 
                onPress = {()=> console.log('this is other button')}
                title="This is a new button"
            />


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