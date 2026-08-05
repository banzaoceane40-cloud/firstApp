import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView, Animated, ViewStyle, StyleProp } from 'react-native';
import { useState, useRef, useEffect, ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack"


type RootStackParamList = {
  Home: undefined,
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
  >;
  
  type ViewDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "ViewDetails"
  >;

export default function App() {

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name= "Home" component= {MainScreen}/>
        <Stack.Screen name= "ViewDetails" component= {ViewDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainScreen({ navigation }: MainScreenProps){
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");

  console.log("App works!");

  return (
     <View>
      <SafeAreaView>
        <ScrollView>
      <Image style={styles.mainImg}
      source={require("./images/VSCode.png")} />

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

     <FadeInView>
      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Oceane"
      keyboardType="default"
      autoCapitalize="words"
      autoComplete="name"
      onChangeText={(text) => 
        setName(text.replace (/[^a-zA-Z ]/g, ""))}
      />

      <Text style={styles.headingTxt}>Enter your surname</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Banza"
       keyboardType="default"
       autoCapitalize="words"
      autoComplete="family-name"
      onChangeText={(text) => 
        setSurname(text.replace (/[^a-zA-Z ]/g, ""))}
      />
      </View>
     </FadeInView>
      
      <Button title="Add user"
        onPress={ () => {
          navigation.navigate("ViewDetails", {
            NameSend : Name,
            SurnameSend : Surname
          });
        }}/>

      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  
)}

function ViewDetails({ navigation, route }: ViewDetailsProps){
  const NameGet = route.params.NameSend;
   const SurnameGet = route.params.SurnameSend;

  return(
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </View>
  )
};

interface FadeInViewProps{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({children, style}: FadeInViewProps) => {
  const fadeAnIm = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnIm,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false
      }
    ).start();
  }, [fadeAnIm])

  return(
    <Animated.View style = {{
      ...(style as object),
      opacity: fadeAnIm
    }}>
      {children}
    </Animated.View>
  );
};

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
