import React, { Component, cloneElement } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import  { styles } from '../styles/sty'

import { credentialsSet } from '../actions/loginActions'

let user;
let pass;
class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userName: null,
      password: null
        }
    this.changeName = this.changeName.bind(this);
  }
  changeName(){
    this.props.credentialsSet(this.state.userName, this.state.password);
  }
  render(){
    console.log('WELLCOME: ' + this.props.userName);
    console.log('PASSWORD: ' + this.props.password);

    return(
      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder='Username'
        value={this.state.userName}
        onChangeText={(userName) => this.setState({userName})}
        />
        <TextInput style={styles.input}
        placeholder='Password'
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity style={styles.button}
        onPress={(userName, password) => {this.changeName(userName, password)}}>
          <Text style={styles.buttonText}
          >SAVE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('Details', this.state)}>
          <Text style={styles.buttonText}
          >GETIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}mapStateToProps = (state) =>{
  return{
    userName: state.userName,
    password: state.password
  }
}
export default connect(mapStateToProps, {credentialsSet})(HomeScreen);