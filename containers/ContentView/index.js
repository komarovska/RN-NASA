import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import s from '../styles';

class ContentView extends Component {

  render() {
    const { date, url, explanation, title } = this.props;
    return (
      <View style={s.container}>
        <Text style={s.smallTitle}>{title}</Text> 
        <Image
          style={{width: 300, height: 300}}
          source={{uri: url}}
        />
        <Text style={s.explanation}>{explanation}</Text> 
        <Text>{date.toString()}</Text>
      </View>
    );
  }
}
  
ContentView.propTypes = {
  date: PropTypes.object,
  explanation: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
};

export default ContentView;
