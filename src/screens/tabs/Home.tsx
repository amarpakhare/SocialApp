import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.smallTxt}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  smallTxt: {
    color: 'red',
  },
});
