import React, { Component, cloneElement, setState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from '../styles/sty'


export default class Details extends Component{
    constructor(props){
        super(props);
        this.loadData();
        this.state={
            userName:'',
            password:''
        }
    }
  render(){
    return(
      <View style={styles.container}>  
        <Text style={styles.title}>
            Hola:{this.state.userName} 
        </Text>
        <Text style={styles.title}>
            Password:{this.state.password}       
        </Text>
      </View>
    );
  }
  loadData = async() => {
      let pss = await AsyncStorage.getItem('pass')
      let usern = await AsyncStorage.getItem('user')
      console.log(pss);
      this.setState({userName:usern});
      this.setState({password:pss});
  }
}