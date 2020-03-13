import React, { Component } from "react";
import { Input } from "react-native-elements";

export class InputField extends Component {
  render() {
    return (
      <Input
        placeholder={this.props.plName}
        label={this.props.label}
        value={this.props.val}
        labelStyle={{ marginTop: 10, fontSize: 20 }}
        disabled={this.props.disVal}
        keyboardType={this.props.keyType}
      />
    );
  }
}

export default InputField;
