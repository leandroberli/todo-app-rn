import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'

const ScrollableRow = (props) => {

    // VER PORQUE NO FUNCIONA ASI
    const outputCards = () => {
        cards.map(card =>  <Card title={card.title} subtitle={card.subtitle } description={card.description}/>  );
    };
    const cards = props.cards

    return (
        <View style={styles.parentRowContainer}>
            <View style={styles.sectionContainer}>
                <FontAwesomeIcon icon={ faListAlt } size={22} style={styles.iconSection} />
                <Text style={styles.titleSection}>{props.nameSection}</Text>
                <Text style={styles.countTitle} > 23 tasks </Text>
            </View>
            
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
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    iconSection: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        marginLeft: 5,
    },
    countTitle: {
        color: '#c4c4c4',
        marginTop: 18,
        marginLeft: 5,
        marginBottom: 15,
        fontSize: 15,
        fontWeight: 'bold',
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
