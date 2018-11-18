import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePickerIOS, View, StyleSheet, Button } from 'react-native';
import moment from 'moment';

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
    const { onSelectData } = this.props;
    const date = moment(this.state.selectedDate).format('YYYY-MM-DD');
    return (
      <View style={styles.container}>
        <Button
          title="Apply Date"
          color="#841584"
          onPress={() => {
            onSelectData(date);
            console.log(date);
          }}
        />
        <DatePickerIOS
          date={this.state.selectedDate}
          onDateChange={this.setDate}
          mode="date"
          maximumDate={ new Date() }
        />
      </View>
    )
  }
}

DatePicker.propTypes = {
    onSelectData: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
