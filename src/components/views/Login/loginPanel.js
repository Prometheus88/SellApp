import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import BackImage from '../../../../assets/images/loginPanel.jpg';

import LoginForm from './loginForm';

class LoginPanel extends Component {


  state = {
    animFinished: false,
    backImage: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps){

    console.log("received props")

    if(nextProps.show && !this.state.animFinished){
      Animated.parallel([
        Animated.timing(this.state.backImage, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(this.state.inputForm, {
          toValue: 1,
          duration: 1500
        })
      ]).start(
        this.setState({
          animFinished: true

        })
      )
    }
  }
  render(){
      console.log(this.state.animFinished)
    return(
      <View>
        <Animated.View
          style={{
            opacity: this.state.backImage
          }}
          >
          <Image
            style={styles.imageStyle}
            source={BackImage}
            resizeMode={'contain'}
          />

        </Animated.View>

        <Animated.View
          style={{
            opacity: this.state.inputForm,
            top: this.state.inputForm.interpolate({
              inputRange: [0,1],
              outputRange: [100, 30]

            })
          }}
          >
          <Text>Login Form</Text>

          <LoginForm />

        </Animated.View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 270,
    height: 150
  }
})

export default LoginPanel;
