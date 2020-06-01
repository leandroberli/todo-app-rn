import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const AddTaskScreen = (props) => {
    return (
        <View style={styles.addTaskContainer}>
            <Text>Add new task screen</Text>
        </View>
    );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
    addTaskContainer: {
        flex: 1,
    }
});