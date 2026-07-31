import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name= "Home" component = {MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen(){
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");

  console.log("App works!");

  return (
     <View>
      <Image style={styles.mainImg}
      source={require("./images/VSCode.png")} />

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Oceane"
      onChangeText={newText => setName(newText)}/>

      <Text style={styles.headingTxt}>Enter your surname</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Banza"
      onChangeText={newText => setSurname(newText)}/>
      </View>
      
      <Button title="Add user"
        onPress={ () => {
          console.log("Name:" + Name + 
                      "Surname:" + Surname)
        }}/>

      <StatusBar style="auto" />
    </View>
  
)}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",

  },
  headingTxt: {
    fontWeight: "bold",
  },
  inputBoxTxt: {
    borderWidth: 1
  },

  mainImg: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250
  },

  inputFlex: {
    marginTop: 20,
    justifyContent: "space-evenly"
  }
});
