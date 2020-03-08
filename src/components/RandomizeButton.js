import React from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import MealsJSON from '../assets/MealsJSON';

const primaryColor = '#d32f2f',
  primaryLightColor = '#ff6659',
  primaryDarkColor = '#9a0007',
  primaryTextColor = '#ffffff';

const styles = StyleSheet.create({
  container: {
    paddingTop: '95%',
  },

  buttonContainer: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    padding: 10,
    marginLeft: '12.5%',
    alignItems: 'center',
    width: '75%',
  },

  buttonText: {
    color: primaryTextColor,
    fontSize: 25,
  },

  textContainer: {
    margin: 10,
    alignItems: 'center',
  },

  textName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  textPrice: {
    padding: 5,
    fontSize: 30,
  },

  textLastEaten: {
    padding: 5,
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default class RandomizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: 'No Meal Selected Yet',
      price: 'No Price Yet',
      lastEaten: 'Never eaten before',
    };
  }

  onPress = () => {
    const mealID = 'meal' + Math.floor(Math.random() * 19);
    this.setState({
      meal: MealsJSON[mealID].name,
      price: MealsJSON[mealID].price,
      lastEaten: MealsJSON[mealID].lastEaten,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{this.state.meal}</Text>
          <Text style={styles.textPrice}>{this.state.price}</Text>
          <Text style={styles.textLastEaten}>{this.state.lastEaten}</Text>
        </View>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.onPress}
          underlayColor={primaryDarkColor}>
          <View>
            <Text style={styles.buttonText}>What am I hungry for?</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
