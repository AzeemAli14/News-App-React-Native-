import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Inputs from '../../components/Inputs';
import Account from '../../components/Account';
import {
  COLOR_Black,
  COLOR_BLUE,
  COLOR_Link,
  COLOR_WHITE,
} from '../../constants/Colors';

const LoginScreen = props => {
  
  return (
    <ScrollView style={{backgroundColor: COLOR_WHITE}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/login.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Welcome back</Text>
        <View style={{marginTop: 20}} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{width: '90%'}}>
          <Text
            style={[styles.textBody, {color: COLOR_Link}]}
            onPress={() => props.navigation.navigate('Forgot')}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.Opacitycontainer}
          onPress={() => props.navigation.navigate('Tabs')}>
          <Text style={styles.submitText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.textAccount}>Or connect using</Text>
        <View style={{flexDirection: 'row'}}>
          <Account color="#3b5c8f" icon="sc-facebook" title="Facebook" />
          <Account
            color="#ec482f"
            icon="sc-google-plus"
            title="Google"
          />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>Don't Have an account ? </Text>
          <Text
            style={[styles.textBody, {color: COLOR_Link}]}
            onPress={() => props.navigation.navigate('SignUp')}>
            {' '}
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
    color: COLOR_BLUE,
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
    alignSelf: 'flex-end',
    color: COLOR_Black,
  },
  textAccount: {
    fontFamily: 'Foundation',
    fontSize: 16,
    color: COLOR_Black,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  Opacitycontainer: {
    width: '80%',
    height: 45,
    backgroundColor: COLOR_BLUE,
    borderColor: COLOR_BLUE,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR_WHITE,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default LoginScreen;
