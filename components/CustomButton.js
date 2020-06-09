import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onAction}>
            <View style={styles.addTaskButton}>
                <Text style={styles.buttonLabel}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    addTaskButton: {
        color: 'black',
        alignItems: 'center',
    },
      buttonLabel: {
        fontSize: 17,
        color: '#0F7394',
        marginTop: 0,
        marginRight: 10,
    },
});