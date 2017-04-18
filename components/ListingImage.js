import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BookingCount from './BookingCount';
import { colors } from '../theme/variables';

export default class ListingImage extends React.Component {
  static defaultProps = {
    showCount: true
  }

  render() {
    const { imageSrc, price, count, showCount } = this.props;
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageSrc }} />
        <Text style={styles.price}>{price}</Text>
        { showCount &&
          <View style={styles.countContainer}>
            <BookingCount count={count} />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 200
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  countContainer: {
    position: 'absolute',
    right: 6,
    top: 13
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#FFFFFF',
    bottom: 20,
    left: 0,
    backgroundColor: colors.gray80
  }
})
