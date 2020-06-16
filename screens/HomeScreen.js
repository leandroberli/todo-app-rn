import React, { useState } from 'react';
import { StyleSheet, InteractionManager, View, Text, Button, } from 'react-native';

import ScrollableRow from '../components/ScrollableRow';
import CustomButton from '../components/CustomButton';
import CardDetailScreen from './CardDetailScreen';
import Modal from 'react-native-modal';
import { set } from 'react-native-reanimated';
import AddTaskScreen from './AddTaskScreen';
import Card from '../components/Card';
import { useLinkProps } from '@react-navigation/native';


const HomeScreen = ({ navigation, route}) => {

  var cardsData = [
    { id: Date.now() + Math.random(),title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description. Here is a extension because i wanna test the max number of lines in my card description. i setted 6.", state: 1 },
    { id: Date.now() + Math.random() ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "MAKE DINNER FOR ALL THE PIBES", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 1 },
    { id: Date.now() + Math.random() ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 2 },
    { id: Date.now() + Math.random() ,title: "Study physics", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Date.now() + Math.random() ,title: "Buy a gift", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Date.now() + Math.random() ,title: "Make money", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Date.now() + Math.random() ,title: "Buy weed", subtitle: "12 Abril 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Date.now() + Math.random() ,title: "Make Dinner", subtitle: "6 Enero 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
    { id: Date.now() + Math.random() ,title: "Pay taxes", subtitle: "1 Mayo 2020", description: "This a example text for fill the card and simulate a description", state: 3 },
  ];

  const [cards, setCards] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ id: Date.now() + Math.random(),title: "Take the bus", subtitle: "30 Mayo 2020", description: "This a example text for fill the card and simulate a description. Here is a extension because i wanna test the max number of lines in my card description. i setted 6.", state: 1 });

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (cards.length == 0) {
    setCards(cardsData);
    setSelectedCard(cardsData[0]);
    cards.forEach(card => {
      console.log(card);
    });
  }

  React.useEffect(() => {
    InteractionManager.runAfterInteractions( () => {
      if (route.params?.card) {
        console.log("------------->HOME - PARAMS CARD")
        console.log(route.params?.card)
        console.log("------------->HOME - CURRENT CARDS")
        console.log(cards)
        let exist = cards.filter(card => { if (card.id === route.params?.card.id ){ return card } })
        if (exist.length > 0) {
          var aux = []
          cards.forEach(card => {
            if (card.id === route.params?.card.id) {
              card.title = route.params?.card.title;
              card.subtitle = route.params?.card.subtitle;
              card.description = route.params?.card.description;
              card.state = route.params?.card.state;
            }
            aux.push(card);
          });
          setCards(aux);
        } else {
          setCards(cards => [...cards, route.params?.card ]);
        }
      }
      navigation.setOptions({headerRight: () => <CustomButton title="+ Add task" onAction={ () => navigation.navigate('AddTask')} /> })
    });
  }, [route.params?.card]);

  const handleDeleteCard = (cardId) => {
    console.log(cardId)
    let newArray = cards.filter(card => { if (card.id !== cardId ){ return card } })
    setCards(newArray);
    setIsModalVisible(false);
  };

  const handleCardTap = (cardId) => {
    let card = cards.filter(card => {if (card.id === cardId) { return card }})
    console.log(card[0])
    setSelectedCard(card[0]);
    setIsModalVisible(true);
  };

  const handleEditCard = () => {
    setIsModalVisible(false);
    navigation.navigate('AddTask', { cardData: selectedCard });
  };

  return (
    <View style={styles.scrrollableRowContainer}>
      <ScrollableRow onTap={handleCardTap} 
        onDeleteCard={handleDeleteCard} 
        cardsSection="1" 
        cards={ cards.filter(card => { if (card.state === 1) { return card } }) }  
        />
      <ScrollableRow onTap={handleCardTap} 
        onDeleteCard={handleDeleteCard} cardsSection="2" 
        cards={ cards.filter(card => { if (card.state === 2) { return card } })} 
        />
      <ScrollableRow onTap={handleCardTap} 
      onDeleteCard={handleDeleteCard} 
      cardsSection="3" 
      cards={ cards.filter(card => { if (card.state === 3) { return card } })} 
      />
      <Modal animationIn="slideInUp"
        animationOut="slideOutDown" 
        onBackdropPress={closeModal} 
        isVisible={isModalVisible} 
        tyle={styles.modalContainer} 
      >
        <CardDetailScreen title={selectedCard.title}
          id={selectedCard.id} 
          subtitle={selectedCard.subtitle} 
          description={selectedCard.description}
          onCloseModal={closeModal}
          onDeleteCard={handleDeleteCard}
          onEdit={ handleEditCard }
        />
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrrollableRowContainer: {
    flex: 1,
  },
  modalContainer: {
    alignItems: 'center',
    height: "100%"
  },
});