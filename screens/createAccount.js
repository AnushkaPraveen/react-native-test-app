import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function CreateAccount({navigation}) {
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[dob,setdob]=useState("");
    const[number,setNumber]=useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello there!</Text>
      <Text style={styles.text1}>Let's get shall we</Text>
      <Text style={styles.text2}>
        Please fill in all fields with details macthing your passport
      </Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input} value={firstname} onChangeText={(firstname)=>setFirstName(firstname)} placeholder="First Name" />
        <TextInput style={styles.input} value={lastname} onChangeText={(lastname)=>setLastName(lastname)} placeholder="Last Name" />
        <TextInput style={styles.input} value={dob} onChangeText={(dob)=>setdob(dob)} placeholder="Date of Birth" />
        <TextInput style={styles.input} value={number} onChangeText={(number)=>setNumber(number)} placeholder="Mobile Number" />
      </View>
      <View style={styles.butttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Address')}>
          <Text>Next</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    margin: 10,
    padding: 10,
  },
  inputcontainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 50,
  },
  butttoncontainer: {
    padding: 90,
  },
});
