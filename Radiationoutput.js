import React, { Component } from "react";
import { View, Text} from "react-native";
import InputField from "./components/InputField";

export class Radiationoutput extends Component {
  state = { isShowingText: "iphone",
            ran2: Math.random() * 100,
          };
  
  render() {
    var con;
    var textColor = "red";
    if(this.state.ran2 == 1 || this.state.ran2 < 25){
        con = "lightgreen"
    }else if(this.state.ran2 == 26 || this.state.ran2 < 60){
      con = "yellow"
    }else if(this.state.ran2 == 61 || this.state.ran2 < 100){
      con = "red"
      textColor= "black"
    }
    return (
      <View style={{flex: 1, backgroundColor:`${con}`}}>
        <InputField plName="Radiation Level" label="Radiation Level" keyType="numeric" disVal={true} val={String(this.state.ran2)} />
        <Text style={{textAlign: "center", fontSize: 30, color: `${textColor}`, marginTop: 50}}>{String(this.state.ran2)}</Text>
      </View>
    );
  }
}

export default Radiationoutput;
