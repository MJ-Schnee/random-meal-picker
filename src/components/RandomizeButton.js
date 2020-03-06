import React from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const primaryColor = '#d32f2f',
  primaryLightColor = '#ff6659',
  primaryDarkColor = '#9a0007',
  primaryTextColor = '#ffffff';

const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    paddingTop: '75%',
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

  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class RandomizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: 'No Meal Selected Yet',
    };
  }

  onPress = () => {
    const mealNumber = Math.floor(Math.random() * 19);
    switch (mealNumber) {
      case 0:
        this.setState({meal: 'Eat at home!'});
        break;
      case 1:
        this.setState({meal: "McDonald's"});
        break;
      case 2:
        this.setState({meal: 'Iron Chef'});
        break;
      case 3:
        this.setState({meal: 'Noodles & Company'});
        break;
      case 4:
        this.setState({meal: 'Cracker Barrel'});
        break;
      case 5:
        this.setState({meal: 'Olive Garden'});
        break;
      case 6:
        this.setState({meal: 'Chipotle'});
        break;
      case 7:
        this.setState({meal: 'OPH / Waffle House'});
        break;
      case 8:
        this.setState({meal: 'Pizza'});
        break;
      case 9:
        this.setState({meal: "Kirby's"});
        break;
      case 10:
        this.setState({meal: "Paxton's Grill"});
        break;
      case 11:
        this.setState({meal: "Ramsey's Trailside"});
        break;
      case 12:
        this.setState({meal: 'Red Robin'});
        break;
      case 13:
        this.setState({meal: 'Skyline Chili'});
        break;
      case 14:
        this.setState({meal: 'Red Lobster'});
        break;
      case 15:
        this.setState({meal: 'Outback Steakhouse'});
        break;
      case 16:
        this.setState({meal: 'Smashburger'});
        break;
      case 17:
        this.setState({meal: 'Chic-Fil-A'});
        break;
      case 18:
        this.setState({meal: 'Taco Bell'});
        break;
      case 19:
        this.setState({meal: 'Panera Bread'});
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.meal}</Text>
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
