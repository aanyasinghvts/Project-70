import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
 constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
 
 render(){
  return(
    <View style={styles.container}>
      <Header
      backgroundColor={'Pink'}
      centerComponent={{
      text: 'Story Hub',
      style: { color: '#fff', fontSize: 20 },
  }}/>

      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          placeholder="Story Title"
      /> 

      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          placeholder="Author"
      /> 

      <TextInput
          style={styles.inputBox1}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          placeholder="Write your Story"
      /> 

       <TouchableOpacity
          style={styles.submitButton,{backgroundColor:"pink"}}
          onPress={() => {
            this.setState({ displayText: this.state.text });
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>{this.state.displayText}</Text>
        


    </View>  
   );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center' 
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
  },
  inputBox1: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 80,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
  },
  submitButton: {
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 100,
    height:40,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  }
})