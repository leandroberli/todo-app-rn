import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native';

import ScrollableRow from '../components/ScrollableRow';


const HomeScreen = ({ navigation, route}) => {

  var cardsData = [
    { id: Math.floor(Math.random() * 100) ,title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description. Here is a extension because i wanna test the max number of lines in my card description. i setted 6.", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "MAKE DINNER FOR ALL THE PIBES", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Math.floor(Math.random() * 100) ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Math.floor(Math.random() * 100) ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Math.floor(Math.random() * 100) ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Math.floor(Math.random() * 100) ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Math.floor(Math.random() * 100) ,title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Math.floor(Math.random() * 100) ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
  ];

  const [cards, setCards] = useState([]);
  const [todoCards, setTodoCards] = useState([]);
  const [inprogressCards, setInprogressCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);

  React.useEffect(() => {
    if (route.params?.card) {
      console.log("--------------->ADD CARD")
      console.log(route.params?.card)
      console.log("--------------->CURRENT CARDS")
      console.log(cards)
      setCards(cards => [...cards, route.params?.card]);
      console.log("--------------->CARDS AFFTER UPDATE")
      console.log(cards)
    }
  }, [route.params?.card]);

  const handleDeleteCard = (cardId) => {
    console.log(cardId)
    let newArray = cards.filter(card => { if (card.id !== cardId ){ return card } })
    setCards(newArray);
  };

  return (
    <View style={styles.scrrollableRowContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
        <View style={styles.addTaskButton}>
          <Text style={styles.buttonLabel}> + Add task</Text>
        </View>
      </TouchableOpacity>
      <ScrollableRow onDeleteCard={handleDeleteCard} cardsSection="1" cards={ cards.filter(card => { if (card.state === 1) { return card } }) }  />
      <ScrollableRow onDeleteCard={handleDeleteCard} cardsSection="2" cards={ cards.filter(card => { if (card.state === 2) { return card } })} />
      <ScrollableRow onDeleteCard={handleDeleteCard} cardsSection="3" cards={ cards.filter(card => { if (card.state === 3) { return card } })} />
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