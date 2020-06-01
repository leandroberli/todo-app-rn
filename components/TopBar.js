import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TopBar = (props) => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.topBarTitle}>React native example</Text>
            <TouchableOpacity onPress={() => Vibration.vibrate(100)}>
                <View style={styles.topBarButtonContainer} >
                    <FontAwesomeIcon icon={faPlus} color={'white'} size={22} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: 'black',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 15,
    },
    topBarTitle: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 5
    },
    topBarButtonContainer: {
        marginRight: 15,
        marginTop: 5,
        color: 'red'
    },
});