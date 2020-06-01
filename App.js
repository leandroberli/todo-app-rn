import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

export default function App() {

  const [addTaskScreen, setAddTaskScreen] = useState(false);

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

  const handleAddTaskScreen = () => {
    setAddTaskScreen(true);
    console.log(addTaskScreen);
  };

  let output = addTaskScreen ? <AddTaskScreen /> : <HomeScreen cardsData={cardsData} />

  return (
    <View style={styles.screen} >
      <TopBar addTaskAction={handleAddTaskScreen} />
      {output}
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  },
});
