import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase/app';
import 'firebase/database';
import config from './config';
import { Listings, Book } from './screens';
import { Button } from './components';

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: {
      visible: false
    }
  }

  /**
   * Initalise firebase with our api key
   */
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }

  /**
   * Hide the status bar so it doesn't overlap out navigation header
   */
  componentWillMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.brand}>friendzone</Text>
        <Text style={styles.slogan}>Find your perfect friend</Text>
        <Button onPress={() => navigate('Listings')}>
          Start Searching
        </Button>
      </View>
    );
  }
}

/**
 * Setup the navigation routes for our app
 */
export default NavApp = StackNavigator({
  Home: { screen: App },
  Listings: { screen: Listings },
  Book: { screen: Book },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    color: '#333333',
    fontSize: 36,
    marginBottom: 15
  },
  slogan: {
    color: '#333333',
    fontSize: 18,
    marginBottom: 25
  }
});
