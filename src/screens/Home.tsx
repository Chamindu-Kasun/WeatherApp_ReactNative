import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type HomeProps = {
  navigation: any;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button
          title="Go to Welcome"
          onPress={() => navigation.push('Welcome')}
        />
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

export default Home;
