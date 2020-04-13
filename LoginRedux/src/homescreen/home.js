import React, { Component, cloneElement } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  { styles } from '../styles/sty'

let user;
let pass;
export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state={
      userName:'',
      password:''
    }
  }
  
  ChangeName(userName){
    this.setState({userName})
  }
  ChangeLastName(password){
    this.setState({password})
  }
  saveData(userName, password){
    AsyncStorage.setItem('user', this.state.userName)
    AsyncStorage.setItem('pass', this.state.password)

  }
  displayData = async () => {
    try{
            alert(await AsyncStorage.getItem('user') + ' ' + await AsyncStorage.getItem('pass'));
    }
   catch(error){
     alert(error);
   } 
  }
  buttonPressed(){
    if(this.state.userName && this.state.password)
    alert(this.state.userName+ ''+ this.state.password);
  }
  resetData() {
    try {
    AsyncStorage.removeItem('pass');
    AsyncStorage.removeItem('user');

      } catch (error) {
      console.log("Error resetting data" + error);
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder='Username'
        value={this.state.userName}
        onChangeText={(userName) => this.ChangeName(userName)}
        />
        <TextInput style={styles.input}
        placeholder='password'
        value={this.state.password}
        onChangeText={(password) => this.ChangeLastName(password)}
        />
        
        <TouchableOpacity style={styles.button}
        onPress={() => this.saveData()}>
          <Text style={styles.buttonText}
          >SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => this.resetData()}>
          <Text style={styles.buttonText}
          >DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={this.displayData}>
          <Text style={styles.buttonText}
          >INFO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}

        onPress={() => this.props.navigation.navigate('Details', this.state)}>
          <Text style={styles.buttonText}
          >GETIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}