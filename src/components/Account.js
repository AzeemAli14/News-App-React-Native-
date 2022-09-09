import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/EvilIcons';
import { COLOR_Black, COLOR_WHITE } from '../constants/Colors';

const Account = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]}>
            <Icon style={styles.accIcon} name={props.icon} />
            <Text style={styles.textTitle}>{props.title}</Text>
        </TouchableOpacity>
    );  
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 135,
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 25,
    },
    accIcon: {
        color: COLOR_WHITE,
        fontSize: 23,
        marginVertical: 12,
        marginHorizontal: 8,
    },
    textTitle: {
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 5,
    }
});

export default Account;