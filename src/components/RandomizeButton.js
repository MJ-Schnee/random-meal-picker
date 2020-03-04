import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const primaryColor = '#d32f2f',
  primaryLightColor = '#ff6659',
  primaryDarkColor = '#9a0007',
  primaryTextColor = '#ffffff';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    padding: 10,
    marginLeft: '12.5%',
    marginTop: 20,
    alignItems: 'center',
    width: '75%',
  },

  buttonText: {
    color: primaryTextColor,
    fontSize: 25,
  },
});

export default class RandomizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    this.setState({});
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={this.onPress}
        underlayColor={primaryDarkColor}>
        <View>
          <Text style={styles.buttonText}>What am I hungry for?</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
