import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header";

export default class PageOne extends React.Component{
  constructor(props) {
    super(props);
    this.state = { somethingSomething: 'whatever'};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header propsname={this.state.somethingSomething} />
        <Text>Open up App.js to start working on your app!</Text>
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
