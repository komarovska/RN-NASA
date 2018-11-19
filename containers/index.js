import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import ContentView from './ContentView';
import { selectDate, selectExplanation, selectUrl, selectTitle } from './selectors';
import { selectData } from './actions';
import s from './styles';

class MainView extends Component {

componentDidMount() {
  const { onSelectData, date } = this.props;
    onSelectData(date);
  }
  render() {
    const { date, url, explanation, title, onSelectData } = this.props;

    return (
    <ScrollView style={s.wrapper}>
      <Text style={s.title}>Astronomic Picture of the Day</Text>
      <ContentView date={date} url={url} explanation={explanation} title={title} />
      <DatePicker onSelectData={onSelectData} />
    </ScrollView>
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

MainView.propTypes = {
  date: PropTypes.object,
  explanation: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  onSelectData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
