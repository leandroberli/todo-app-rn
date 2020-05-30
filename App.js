import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollableRow from './components/ScrollableRow';

export default function App() {

  var cardsData = [
    {title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description. Here is a extension because i wanna test the max number of lines in my card description. i setted 6.", state: 1},
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
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3},
    {title: "Go to the barber", subtitle: "19 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1},
  ];

  const [cards, setCards] = useState(cardsData)
  const [todoCards, setTodoCards] = useState();
  const [inprogressCards, setInprogressCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);

  return (
    <View style={styles.screen}>
      <ScrollableRow style={styles.todoRow} nameSection="To do" cards={ cards.filter(card => { if(card.state === 1) { return card }}) }/>
      <ScrollableRow nameSection="In progress" cards={ cards.filter(card => { if(card.state === 2) { return card }}) } />
      <ScrollableRow nameSection="Done" cards={ cards.filter(card => { if(card.state === 3) { return card }}) } />
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
});
