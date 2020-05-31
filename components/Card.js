import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { LinearGradient } from 'expo';

const Card = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => {props.onDelete(props.title); Vibration.vibrate(100)}}>
            <View style={{...styles.card, ...props.style }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
                <Text numberOfLines={6} style={styles.description}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        width: 175,
        marginBottom: 5,
        marginLeft: 5,
        alignContent: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 3,
        flex: 1,
    },
    title: {
        padding: 5,
        fontSize: 17,
        width: '100%',
        borderColor: 'black',
        borderBottomWidth: 1,
        fontWeight: 'bold',
    },
    subtitle: {
        padding: 5,
        fontSize: 15,
        width: '100%',
    },
    description: {
        margin: 5,
        flex: 1
    },
    touch: {
    }
});