import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'

const ScrollableRow = (props) => {
    return (
        <View style={styles.parentRowContainer}>
            <Text style={styles.titleSection}>{props.nameSection}</Text>
            <View style={{...styles.rowContainer, ...props.style}}>
                <ScrollView horizontal={true}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
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
    rowContainer : {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '100%',
        justifyContent: 'flex-start',
    },
    titleSection: {
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 19,
        fontWeight: 'bold',
    }
});
