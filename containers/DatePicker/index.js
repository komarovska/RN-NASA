import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePickerIOS, View, Button } from 'react-native';
import moment from 'moment';
import s from '../styles';

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
      <View style={s.datePicker}>
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
