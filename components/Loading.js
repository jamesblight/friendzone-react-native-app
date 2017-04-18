import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme/variables';

export default class Loading extends React.Component {
  render() {
    return (
      <Text style={styles.loading}>Loading...</Text>
    )
  }
}

const styles =  StyleSheet.create({
  loading: {
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8
  }
})
