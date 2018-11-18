import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import ContentView from './ContentView';
import { selectDate, selectExplanation, selectImg, selectTitle } from './selectors';
import { selectData } from './actions';

class MainView extends Component {

componentDidMount() {
    const { onSelectData, selectedDate } = this.props;
      onSelectData(selectedDate);
    }
  render() {
    const { date, img, explanation, name } = this.props;

    return (
      <View style={styles.container}>
        <DatePicker />
        <ContentView date={date} img={img} explanation={explanation} name={name} />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
    date: selectDate(),
    explanation: selectExplanation(),
    img: selectImg(),
    title: selectTitle(),
});
  
const mapDispatchToProps = {
    onSelectData: selectData,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
