import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import {StyleSheet} from 'react-native';

export default class App extends Component {
  state = {
    textValue: 'Change me!'
  }

  onPress = () => {
    const quotes = ["i love you!", "believe in yourself!", "you got this!"];
    var randomNumber = Math.floor(Math.random()From Organizer: Kat C. to Everyone: (3:18 PM)* quotes.length);
    this.setState({
      textValue: quotes[randomNumber]
    })
  }

  render() {
    return (
      <View style={{paddingTop: 25}}>
        <Text>{this.state.textValue}</Text>
        <Button title="Change Text" onPress={this.onPress} />
      </View>
    )
  }
}

// const styles = StyleSheet.create({


// });

