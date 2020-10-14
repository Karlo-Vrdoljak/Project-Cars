import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/navigation';

import 'react-native-gesture-handler';


export default function App() {
  useEffect(() => {
    // NavigationBar.setColor('#ffab8e');
  });
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="light" backgroundColor={"#222"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    resizeMode: "center"
  },
});
