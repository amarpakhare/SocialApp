import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RootStackParamList} from '../../navigation/Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
const Login = ({navigation}: LoginProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Sign In"
        onPress={() => {
          setIsSignedIn(true);
          console.log(isSignedIn);
        }}
      />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({});
