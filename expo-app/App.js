import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sample from 'shared/Sample';
import { add } from 'shared/math';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Sample />
        <Text>1 + 2 = {add(1, 2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
