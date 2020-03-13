import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Main from './Main.js'
import Radiationoutput from './Radiationoutput.js'

export default function App() {
  function ale() {
    alert("hello");
  }
  return (
    <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true}  />
         <Scene key = "main" component = {Main} title = "Main"/>
         <Scene key = "radiationoutput" component = {Radiationoutput} title = "Output"/>
      </Scene>
   </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    color: "red"
  }
});
