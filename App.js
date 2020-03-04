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
} from 'react-native';

const primaryColor = '#d32f2f',
  primaryLightColor = '#ff6659',
  primaryDarkColor = '#9a0007',
  primaryTextColor = '#ffffff';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
});

import RandomizeButton from './src/components/RandomizeButton';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <RandomizeButton />
        </SafeAreaView>
      </>
    );
  }
}
