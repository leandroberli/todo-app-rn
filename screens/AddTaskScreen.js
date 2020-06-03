import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-gesture-handler';

const AddTaskScreen = ({navigation, props}) => {
    const [task, setTask] = useState({ title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 });


    const handleStateChange = (newState) => {
        let newTask = {title: task.title, subtitle: task.subtitle, description: task.description, state: newState};
        setTask(newTask);
    };

    return (
        <View style={styles.addTaskContainer}>
            <View style={styles.cardContainer}>
                <TextInput style={styles.titleInput} placeholder="Title" value={task.title}></TextInput>
                <TextInput style={styles.subtitleInput} placeholder="Date" value={task.subtitle}></TextInput>
                <View style={styles.pickerContainer}>
                <Picker selectedValue={task.state} style={styles.picker}
                    onValueChange={handleStateChange}
                >
                    <Picker.Item label="To do" value={1} />
                    <Picker.Item label="In progress" value={2} />
                    <Picker.Item label="Done" value={3} />
                </Picker>
                </View>
                <TextInput style={styles.textArea} 
                    value={task.description}  
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
    },
    picker: {
        height: 50,
        width: 150,
    },
    pickerContainer: {
        borderRadius: 6,
        borderColor: 'black',
        borderWidth: 0.5,
        alignSelf: 'flex-start',
        marginLeft: 18
    }
});