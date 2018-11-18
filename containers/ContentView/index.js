import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

class ContentView extends Component {

   render() {
      const { date, url, explanation, title } = this.props;
      return (
        <View style={styles.container}>
          <Text>{title}</Text> 
          <Image
            style={{width: 200, height: 200}}
            source={{uri: url}}/>
           <Text>{explanation}</Text> 
           <Text>{date.toString()}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
  
ContentView.propTypes = {
  date: PropTypes.object,
  explanation: PropTypes.string,
  img: PropTypes.string,
  onSelectData: PropTypes.func,
};

export default ContentView;