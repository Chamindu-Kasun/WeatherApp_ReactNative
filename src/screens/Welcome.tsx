import React from 'react';
import {SafeAreaView, Text, View, Button, StyleSheet} from 'react-native';

type WelcomeProps = {
  navigation: any;
};

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button title="Go to Home" onPress={() => navigation.push('Home')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Welcome;
