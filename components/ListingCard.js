import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ListingImage from './ListingImage';
import  { colors } from '../theme/variables';

export default class ListingCard extends React.Component {
  render() {
    const { imageSrc, title, description, price, count } = this.props;
    return (
      <View style={styles.container}>
        <ListingImage imageSrc={imageSrc} price={price} count={count}/>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16
  },
  body: {
    paddingTop: 14,
    paddingBottom: 14,
  },
  title: {
    fontWeight: 'bold',
    color: colors.dark,
    fontSize: 16
  },
  description: {
    color: colors.lighterDark,
    fontSize: 12
  }
})
