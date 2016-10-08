import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={{
          paddingTop: 20,
          backgroundColor: '#006F9C',
          flex: 1,
      }}>
        <WebView
          source={{uri: 'https://app.elationpassport.com/'}}
          style={{marginTop: 0, flex: 1,}}
        />
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

Exponent.registerRootComponent(App);
