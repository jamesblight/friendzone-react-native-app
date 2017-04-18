import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { colors } from '../theme/variables';

export default class BookingCount extends React.Component {
  static propTypes = {
    count: PropTypes.number
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.count !== nextProps.count) {
      this.text.pulse(300);
    }
  }

  render() {
    return (
      <Animatable.Text
        style={styles.count}
        ref={node => this.text = node}
      >
        Booked {this.props.count} times
      </Animatable.Text>
    )
  }
}

const styles =  StyleSheet.create({
  count: {
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8
  }
})
