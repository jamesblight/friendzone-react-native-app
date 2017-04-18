import React, { PropTypes } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func
  }

  render() {
    return (
      <Image style={styles.avatar} source={require('../assets/avatar.png')}/>
    )
  }
}

const styles =  StyleSheet.create({
  avatar: {
    height: 50,
    width: 50
  }
})
