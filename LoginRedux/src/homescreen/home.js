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
      } catch (error) {
      console.log("Error resetting data" + error);
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.userName}</Text>
        <TextInput 
        placeholder='Name'
        value={this.state.userName}
        onChangeText={(userName) => this.ChangeName(userName)}
        />
        <TextInput 
        placeholder='password'
        value={this.state.password}
        onChangeText={(password) => this.ChangeLastName(password)}
        />
        
        <TouchableOpacity onPress={() => this.saveData()}>
          <Text>save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.resetData()}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.displayData}>
          <Text>Show</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', this.state)}>
          <Text>GETIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}