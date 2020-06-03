import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddTaskScreen = ({navigation, props}) => {
    return (
        <View style={styles.addTaskContainer}>
            <View style={styles.cardContainer}>
                <TextInput style={styles.titleInput} placeholder="Title"></TextInput>
                <TextInput style={styles.subtitleInput} placeholder="Date"></TextInput>
                <TextInput style={styles.textArea} 
                    placeholder="Description" 
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical="top" 
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack() }>
                        <View style={styles.addButton}>
                        <   Text style={styles.buttonLabel}> + Add task</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
    addTaskContainer: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        width: '90%',
        height: '80%',
        elevation: 5,
        alignItems: 'center'
    },
    titleInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        margin: 10,
        height: 40,
        fontSize: 22,
        fontWeight: 'bold',
        padding: 5,
        width: '90%'
    },
    subtitleInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        margin: 10,
        height: 40,
        fontSize: 17,
        padding: 5,
        width: '90%'
    },
    textArea: {
        borderColor: 'black',
        borderWidth: 0.5,
        margin: 10,
        marginBottom: 0,
        borderRadius: 6,
        flex: 1,
        fontSize: 17,
        padding: 5,
        width: '90%'
    },
    buttonContainer: {
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 10,
        alignSelf: 'flex-end'
    },
    addButton: {
        color: 'black',
        alignItems: 'center',
      },
      buttonLabel: {
        fontSize: 17,
        color: '#0F7394',
        marginTop: 10
      }
});