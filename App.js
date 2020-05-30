import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollableRow from './components/ScrollableRow';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollableRow style={styles.todoRow} nameSection="To do" />
      <ScrollableRow nameSection="In progress" />
      <ScrollableRow nameSection="Done"/>
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
