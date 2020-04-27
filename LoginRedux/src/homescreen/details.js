import React, { Component } from 'react';
import {Text, View} from 'react-native';

import {styles} from '../styles/sty'
import { connect } from 'react-redux'

class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      userName: this.props.userName,
      password: this.props.password
    }
  }
  render(){
    console.log('HI: ' + this.props.userName);
    return(
      <View style={styles.container}>  
        <Text style={styles.title}>
          HI: {this.props.userName}
        </Text>
        <Text style={styles.title}>
          HI: {this.state.password}
        </Text>
      </View>
    );
  }
 
}
const mapStateToProps = state => ({
  userName: state.userName,
  password: state.password
  })
export default connect(mapStateToProps,null)(Details);