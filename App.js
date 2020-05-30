import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollableRow from './components/ScrollableRow';

export default function App() {

  var cards = [
    {title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
  ]

  const todoCards = cards.filter(card => {
    if (card.state == 1) {
      //console.log(card);
      return card;
    }
  });

  const inprogressCards = cards.filter(card => {
    if (card.state == 2) {
      //console.log(card);
      return card;
    }
  });

  const doneCards = cards.filter(card => {
    if (card.state == 3) {
      //console.log(card);
      return card;
    }
  });

  return (
    <View style={styles.screen}>
      <ScrollableRow style={styles.todoRow} nameSection="To do" cards={todoCards} />
      <ScrollableRow nameSection="In progress" cards={inprogressCards} />
      <ScrollableRow nameSection="Done" cards={doneCards} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  todoRow: {
    
  }
});
