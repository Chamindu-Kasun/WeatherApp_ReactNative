import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <Navigation />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
