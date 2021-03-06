import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { getOrientation, setOrientationListener, removeOrientationListener } from '../../utils/misc';

import Logo from './logo';
import LoginPanel from './loginPanel';


import LoadTabs from '../tabs';

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      orientation: getOrientation(500),
      logoAnimation: false
    }

    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    })
  }

  showLogin = () => {
    console.log("show login called")
    this.setState({
      logoAnimation: true
    })
  }



  componentDidMount(){
    removeOrientationListener()
  }

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <Logo
            showLogin={this.showLogin}
            orientation={this.state.orientation}
          />
          <LoginPanel
            show={this.state.logoAnimation}
            orientation={this.state.orientation}
          />
        
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})



export default Login;
