import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import BaseRouting from '@src/routes/BaseRouting';
export default function App() {
  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <BaseRouting />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
