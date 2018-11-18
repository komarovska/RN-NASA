import React, { Component } from 'react'
import { DatePickerIOS, View, StyleSheet } from 'react-native'

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({selectedDate: newDate})
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.selectedDate}
          onDateChange={this.setDate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
