import React from "react";
import {  View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import {  Button } from "react-native-elements";
import InputField from "./components/InputField";


const Main = () => {
  const goToOutput = () => {
    Actions.radiationoutput();
  };
  return (
    <View>
      <InputField plName="Model Name" label="Input your phone model name" />
      <InputField plName="Sim Name" label="Input your phone service carrier name"/>
      <InputField plName="Phone Number" label="Input your phone Number" keyType="name-phone-pad"/>
      <View style={styles.container}>
        <Button
          title="Check your Radiation"
          onPress={goToOutput}
          center
          style={styles.ck}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  inp1: {
    marginTop: 10,
    marginBottom: 10
  },
  inp2: {
    marginTop: 10,
    marginBottom: 10
  },
  btnDiv: {
    justifyContent: "center",
    alignItems: "stretch"
  },
  ck: {
    marginTop: 10
  }
});
export default Main;
