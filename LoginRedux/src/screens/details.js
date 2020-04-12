import React, { Component } from "react"
import {StyleSheet, View, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class DetailsScreen extends Component{
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
            </View>
          );
    }
    
  } export default DetailsScreen;