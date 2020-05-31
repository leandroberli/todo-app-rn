import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollableRow from '../components/ScrollableRow';

const HomeScreen = (props) => {
    const [cards, setCards] = useState(props.cardsData)
    const [todoCards, setTodoCards] = useState(todos);
    const [inprogressCards, setInprogressCards] = useState(inprogress);
    const [doneCards, setDoneCards] = useState(done);

    let todos = cards.filter(card => { if(card.state === 1) { return card }})
    let inprogress = cards.filter(card => { if(card.state === 2) { return card }})
    let done = cards.filter(card => { if(card.state === 3) { return card }})

    return (
        <View style={styles.screen}>
          <ScrollableRow cardsSection="1" cards={ todos }/>
          <ScrollableRow cardsSection="2" cards={ inprogress } />
          <ScrollableRow cardsSection="3" cards={ done } />
        </View>
      );
};

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30
      },
});