import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app!</Text>
      <Text>Enter your name</Text>
      <TextInput placeholder="Oceane"/>
      <Text>Enter your surname</Text>
      <TextInput placeholder="Banza"/>
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
  
});
