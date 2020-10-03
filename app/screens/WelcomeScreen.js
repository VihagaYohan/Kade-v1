import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={()=>navigation.navigate('Login')}/>
        <AppButton title="Register" color="secondaryColor"  onPress={()=>navigation.navigate('Register')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize:25,
    fontWeight:'600',
    paddingVertical:20
  },

  buttonContainer: {
    width:'100%',
    padding: 20,
  },
});
