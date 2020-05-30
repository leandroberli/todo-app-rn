import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'

const ScrollableRow = (props) => {

    // VER PORQUE NO FUNCIONA ASI
    const outputCards = () => {
        cards.map(card =>  <Card title={card.title} subtitle={card.subtitle } description={card.description}/>  );
    };
    const cards = props.cards

    return (
        <View style={styles.parentRowContainer}>
            <Text style={styles.titleSection}>{props.nameSection}</Text>
            <View style={{...styles.rowContainer, ...props.style}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    { props.cards.map(card => <Card style={card.state == 1 ? styles.todoCard : card.state == 2 ? styles.inprogressCard : styles.doneCard } title={card.title} subtitle={card.subtitle } description={card.description} /> )}
                </ScrollView>
            </View>
        </View>
    );
};

export default ScrollableRow;

const styles = StyleSheet.create({
    parentRowContainer: {
        flex: 1,
    },
    rowContainer : {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'black',
        width: '100%',
        justifyContent: 'flex-start',
    },
    titleSection: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        fontSize: 19,
        fontWeight: 'bold',
    },
    todoCard: {
        backgroundColor: 'white'
    },
    inprogressCard: {
        backgroundColor: '#D98E04'
    },
    doneCard: {
        backgroundColor: '#23D9B7'
    }
});
