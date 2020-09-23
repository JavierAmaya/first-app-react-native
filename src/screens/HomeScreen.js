import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
 

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Hi everyone! This is my first mobileApp, by Javier Amaya</Text>
    <Button 
      onPress={ () => props.navigation.navigate('Components')}
      title="Go to components Demo"
    />
    <Button
      onPress = { () => props.navigation.navigate('List')}
      title = "Go to list since a easy button"
    />
    
    <TouchableOpacity onPress={ () => props.navigation.navigate('List')} >
      <Text> GO TO LIST DEMO From TouchableOpacity</Text>   
    </TouchableOpacity>

  </View>
    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
