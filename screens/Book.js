import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';
import { ListingCard, ListingImage, Avatar, BookingCount } from '../components';
import { colors } from '../theme/variables';

export default class Book extends React.Component {
  static navigationOptions = {
    title: (navigation) => navigation.state.params.title
  }

  /**
   * Set our initial count to null
   * We check if count is null in render() as a loading indicator - When firebase
   * updates the count, it will no longer be null
   */
  constructor(props) {
    super(props);
    this.state = { count: null };
  }

  /**
   * Attach a listener to the count ref and update state when it changes
   */
  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.countRef = firebase.database().ref('listings/' + id + '/count');
    this.countRef.on('value', snapshot => {
      this.setState({ count: snapshot.val() });
    });
  }

  /**
   * Remove firebase listeners
   */
  componentWillUnmount() {
    this.countRef.off('value');
    this.countRef = null;
  }

  /**
   * Book a listing using a transaction to avoid stale data / conflicted updates
   */
  bookListing(id) {
    this.countRef.transaction(count => {
      return count ? count + 1 : 1;
    });
  }

  render() {
    const { id, title, description, price, imageSrc } = this.props.navigation.state.params;
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <ListingImage imageSrc={imageSrc} price={price} showCount={false} />
            <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Avatar />
              <Text style={styles.description}>{description}</Text>
              { count === null &&
                <Text>Loading count...</Text>
              }
              { count !== null &&
                <BookingCount count={count} />
              }
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => this.bookListing(id)} style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scrollContainer: {
    marginBottom: 50
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 16
  },
  description: {
    marginTop: 16,
    marginBottom: 20
  },
  bookButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: colors.primary,
  },
  bookButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18
  }
})
