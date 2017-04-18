import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles =  StyleSheet.create({
  button: {
    backgroundColor: '#FF1B36',
    borderRadius: 4,
    padding: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF'
  }
})
