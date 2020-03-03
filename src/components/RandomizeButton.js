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
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});

export default function RandomizeButton() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="What am I going to eat?"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}
