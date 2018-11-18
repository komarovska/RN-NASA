import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

class ContentView extends Component {

   render() {
      const { date, img, explanation, name } = this.props;
  
      return (
        <View style={styles.container}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: img}}/>
           <Text>{{explanation}}</Text>
           <Text>{{name}}</Text>
           <Text>{{date}}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
ContentView.propTypes = {
    date: PropTypes.number,
    explanation: PropTypes.string,
    img: PropTypes.string,
    onSelectData: PropTypes.func,
};

export default ContentView;