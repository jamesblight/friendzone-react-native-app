import React from 'react';
import { StyleSheet, View, Text, ListView, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';
import { ListingCard, Loading } from '../components';

export default class Listings extends React.Component {
  static navigationOptions = {
    title: "Listings"
  }

  /**
   * Setup our dataSource and state
   */
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: null
    };
  }

  /**
   * Listen for updates to the listings data and update the dataSource
   */
  componentDidMount() {
    this.listingRef = firebase.database().ref('/listings/');
    this.listingRef.on('value', snapshot => {
      this.setState({ dataSource: this.ds.cloneWithRows(snapshot.val()) });
    });
  }

  /**
   * Remove listeners for the listings data
   */
  componentWillUnmount() {
    this.listingRef.off('value');
    this.listingRef = null;
  }

  render() {
    const { navigate } = this.props.navigation;
    const { dataSource } = this.state;
    return (
      <View style={styles.container}>
        { dataSource === null &&
          <View style={styles.loadingContainer}>
            <Loading />
          </View>
        }
        { dataSource &&
          <ListView
            dataSource={dataSource}
            renderRow={rowData => (
              <TouchableOpacity
                key={rowData.id}
                delayPressIn={150}
                onPress={() => navigate('Book', { ...rowData })}
              >
                <ListingCard
                  {...rowData}
                />
              </TouchableOpacity>
            )}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  loadingContainer: {
    alignSelf: 'center'
  }
})
