import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

import Input from '../../components/Inputs';
import {COLOR_Black, COLOR_BLUE, COLOR_Link, COLOR_WHITE} from '../../constants/Colors';

const SignupScreen = props => {
  return (
    <ScrollView style={{backgroundColor: COLOR_WHITE}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/signup.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Input name="Full Name" icon="user" />
        <Input name="Email" icon="envelope" />
        <Input name="Phone" icon="bell" />
        <Input name="Password" icon="lock" pass={true} />
        <Input name="Confirm Password" icon="lock" pass={true} />
        <TouchableOpacity
          style={styles.Opacitycontainer}
          onPress={() => props.navigation.navigate('Tabs')}>
          <Text style={styles.submitText}>CREATE</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textBody}>Already have an account ?</Text>
          <Text
            style={[styles.textBody, {color: COLOR_Link}]}
            onPress={() => props.navigation.navigate('Login')}>
            {' '}
            Login here
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
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    fontFamily: 'Foundation',
    marginVertical: 5,
    color: COLOR_BLUE,
  },
  textBody: {
    fontSize: 16,
    fontFamily: 'Foundation',
    color: COLOR_Black,
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

export default SignupScreen;
