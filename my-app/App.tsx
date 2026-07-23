import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Image style={styles.mainImg}
      source={require("./images/VSCode.png")} />

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Oceane"/>
      <Text style={styles.headingTxt}>Enter your surname</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Banza"/>  
      </View>
      
      <Button title="Add user"/>

      <StatusBar style="auto" />
    </View>
  );
}

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
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,

  },

  mainImg: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250
  },

  inputFlex: {
    flexDirection: "row",
    marginTop: 20
  }
});
