import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-gesture-handler';

import CustomButton from '../components/CustomButton';

const AddTaskScreen = ({route ,navigation}) => {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(Math.floor(Math.random() * 100));
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [estado, setEstado] = useState(1);

    var buttonTitle = edit ? "Save it" : "+ Add tas"

    React.useEffect(() => {
        navigation.setOptions({ headerStyle: {height:60} });
        if (route.params) {
            const { cardData } = route.params; 
            setId(cardData.id)
            setTitle(cardData.title);
            setSubtitle(cardData.subtitle);
            setEstado(cardData.state);
            setDescription(cardData.description);
            setEdit(true)

            buttonTitle = "Save it"
            navigation.setOptions({title: 'View task'})
        }
    }, [route.params?.cardData]);

    return (
        <View style={styles.addTaskContainer}>
            <View style={styles.cardContainer}>
                <TextInput style={styles.titleInput}
                    placeholder="Title" 
                    onChangeText={ title => setTitle(title)}
                    value={title} 
                />
                <TextInput 
                    style={styles.subtitleInput} 
                    placeholder="Date" 
                    onChangeText={subtitle => setSubtitle(subtitle)} 
                    value={subtitle}
                />
                <View style={styles.pickerContainer}>
                    <Picker selectedValue={estado} style={styles.picker}
                        onValueChange={estado => setEstado(estado)}
                    >
                        <Picker.Item label="To do" value={1} />
                        <Picker.Item label="In progress" value={2} />
                        <Picker.Item label="Done" value={3} />
                    </Picker>
                </View>
                <TextInput style={styles.textArea}   
                    placeholder="Description" 
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical="top" 
                    onChangeText={desc => setDescription(desc)}
                    value={description}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton title={buttonTitle}
                        onAction={ () => { 
                            navigation.navigate( 'Home', { 
                                card: {
                                    id: id, 
                                    title: title,
                                    subtitle: subtitle,
                                    description: description,
                                    state:estado 
                                }
                            })
                        }}
                    />
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