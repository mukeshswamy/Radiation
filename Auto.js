import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "./components/InputField";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";
import Constants from "expo-constants";
import * as Cellular from "expo-cellular";
import * as Battery from "expo-battery";

function Auto() {
  const [batterylife, batteryLifeElite] = useState(null);

  useEffect(() => {
    _subscribe();
  });

  async function _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    batteryLifeElite(batteryLevel);
  }

  const goToOutput = () => {
    Actions.radiationoutput();
  };
  return (
    <View>
      <InputField
        plName="Modal Name"
        Label="Input your phone model Name"
        val={Constants.deviceName}
      />
      <InputField
        plName="Sim Name"
        Label="Input your phone service carrier Name"
        val={Cellular.carrier}
      />
      <InputField
        plName="Sim Name"
        Label="Input your phone service carrier Name"
        val={Cellular.isoCountryCode}
      />
      <InputField
        plName="Sim Name"
        Label="Input your phone service carrier Name"
        val={Cellular.mobileCountryCode}
      />
      <InputField
        plName="Sim Name"
        Label="Input your phone service carrier Name"
        val={Cellular.mobileNetworkCode}
      />

      <View style={styles.container}>
        <Button
          title="Check your Radiation"
          onPress={goToOutput}
          center
          style={styles.ck}
        />
      </View>
      <View>
        <Text>Mobile Name: {Constants.deviceName}</Text>
        <Text>Sim Name: {Cellular.carrier}</Text>
        <Text>ISO Country Code: {Cellular.isoCountryCode}</Text>
        <Text>Mobile Country Code: {Cellular.mobileCountryCode}</Text>
        <Text>Mobile Network Code {Cellular.mobileNetworkCode}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inp1: {
    marginTop: 10,
    marginBottom: 10,
  },
  inp2: {
    marginTop: 10,
    marginBottom: 10,
  },
  btnDiv: {
    justifyContent: "center",
    alignItems: "stretch",
  },
  ck: {
    marginTop: 10,
  },
});

export default Auto;
