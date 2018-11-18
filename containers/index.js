import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import ContentView from './ContentView';
import { selectDate, selectExplanation, selectUrl, selectTitle } from './selectors';
import { selectData } from './actions';

class MainView extends Component {

componentDidMount() {
    const { onSelectData, date } = this.props;
      onSelectData(date);
    }
  render() {
    const { date, url, explanation, title, onSelectData } = this.props;

    return (
      <View style={styles.container}>
        <ContentView date={date} url={url} explanation={explanation} title={title} />
        <DatePicker onSelectData={onSelectData} />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
    date: selectDate,
    explanation: selectExplanation,
    url: selectUrl,
    title: selectTitle,
});
  
const mapDispatchToProps = {
    onSelectData: selectData,
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
