import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenSquare, faCheckSquare, faListAlt } from '@fortawesome/free-solid-svg-icons'

const ScrollableRow = (props) => {
    console.log(props)
    const [cardsSection, setCardsSection] = useState(props.cardsSection);
    const [cards, setCards] = useState(props.cards);

    let cardStyle = cardsSection == 1 ? styles.todoCard : cardsSection == 2 ? styles.inprogressCard : styles.doneCard
    let titleForSection = cardsSection == 1 ? 'To do' : cardsSection == 2 ? 'In progress' : 'Done'
    let icon = cardsSection == 1 ? faPenSquare : cardsSection == 2 ? faListAlt : faCheckSquare
    //let count = cards.length

    const handleDeleteCard = (title) => {
        let arr = cards.filter( entry => {
            if (entry.title != title) {
                return entry
            }
        });
        setCards(arr);
    };

    return (
        <View style={styles.parentRowContainer}>
            <View style={styles.sectionContainer}>
                <FontAwesomeIcon icon={ icon } size={22} style={styles.iconSection} />
                <Text style={styles.titleSection}> { titleForSection } </Text>
                <Text style={styles.countTitle} > { cards.length } tasks </Text>
            </View>
            <View style={{...styles.rowContainer, ...props.style}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    { cards.map(card => <Card style={cardStyle} title={card.title} subtitle={card.subtitle } description={card.description} onDelete={handleDeleteCard} /> )}
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
