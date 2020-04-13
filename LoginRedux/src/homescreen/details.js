import React, { Component, cloneElement } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from '../styles/sty'


export default class Details extends Component{
    constructor(props){
        super(props);
        this.loadData();
    }
  render(){
    return(
      <View style={styles.container}>  
        <Text style={styles.title}>
            hola:
        </Text>
      </View>
    );
  }
  loadData = async() => {
      const value = await AsyncStorage.getItem('pass')
      console.log(value)
  }
}