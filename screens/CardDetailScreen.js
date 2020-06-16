import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import CustomButton from '../components/CustomButton';

const CardDetailScreen = (props) => {
    return(
        <View style={styles.modal}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.buttonContainer}>
                <CustomButton title="Close" onAction={props.onCloseModal}></CustomButton>
            </View>
            </View>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.buttonContainer}>
                <CustomButton title="Edit" onAction={props.onEdit}/>
                <CustomButton style={styles.deleteButton} 
                    title="Delete" 
                    onAction={ () => { 
                        props.onDeleteCard(props.id);
                }}/>
            </View>
        </View>
    );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
    modal: {
        height: "60%",
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
    },
    titleContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        
    },
    subtitle: {
        fontSize: 17,
        margin: 10,
    },
    description: {
        flex: 1,
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        margin: 10,
    },
    deleteButton: {
    }
});