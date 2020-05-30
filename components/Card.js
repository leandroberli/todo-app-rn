import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style }}>
            <Text style={styles.title}>Study maths.</Text>
            <Text style={styles.subtitle}>30 May. 2020</Text>
            <Text style={styles.description}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Text>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        width: 175,
        marginBottom: 10,
        marginLeft: 5,
        alignContent: 'center',
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
});