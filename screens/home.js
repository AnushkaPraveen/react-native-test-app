import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.topic}>Wapp</Text>
      </View>
      <Icon style={styles.icon} name="finger-print" size={90} color="green" onPress={() => navigation.navigate('CreateAccount')} />
      <Text style={styles.figerprintText}>Unlock with your fingerprint</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    padding: 40,
  },
  topic: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 90,
  },
  figerprintText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight:'bold',
    fontSize:25
   
  },
});
