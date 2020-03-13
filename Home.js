import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, CheckBox, Header } from "react-native-elements";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const goToAbout = () => {
    Actions.main();
  };
  function handleCheck() {
    setChecked(!checked);
  }
  var checkButton;
  if (checked) {
    checkButton = (
      <Button
        title="Check your Radiation"
        buttonStyle={{ paddingLeft: 40, paddingRight: 40 }}
        onPress={goToAbout}
        center
      />
    );
  } else {
    checkButton = <Button style={{ display: "none" }} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello User</Text>
      <CheckBox
        center
        title="Checking Manually"
        iconRight
        // iconType="material"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor="red"
        checked={checked}
        onPress={() => handleCheck()}
      />
      <TouchableOpacity>{checkButton}</TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7fe",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    marginBottom: 10
  },
  ck: {
    marginBottom: 10,
    marginTop: 10
  }
});
export default Home;
