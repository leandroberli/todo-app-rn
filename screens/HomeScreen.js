import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';

import ScrollableRow from '../components/ScrollableRow';


const HomeScreen = ({ navigation, props}) => {

  var cardsData = [
    { title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description. Here is a extension because i wanna test the max number of lines in my card description. i setted 6.", state: 1 },
    { title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "MAKE DINNER FOR ALL THE PIBES", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
  ];


  const [cards, setCards] = useState(cardsData);
  const [todoCards, setTodoCards] = useState(todos);
  const [inprogressCards, setInprogressCards] = useState(inprogress);
  const [doneCards, setDoneCards] = useState(done);

  let todos = cards.filter(card => { if (card.state === 1) { return card } })
  let inprogress = cards.filter(card => { if (card.state === 2) { return card } })
  let done = cards.filter(card => { if (card.state === 3) { return card } })

  return (
    <View style={styles.scrrollableRowContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
        <View style={styles.addTaskButton}>
          <Text style={styles.buttonLabel}> + Add task</Text>
        </View>
      </TouchableOpacity>
      <ScrollableRow cardsSection="1" cards={todos}  />
      <ScrollableRow cardsSection="2" cards={inprogress} />
      <ScrollableRow cardsSection="3" cards={done} />
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrrollableRowContainer: {
    flex: 1,
  },
  addTaskButton: {
    color: 'black',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 17,
    color: '#0F7394',
    marginTop: 10
  }
});