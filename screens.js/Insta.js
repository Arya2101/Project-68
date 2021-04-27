import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Insta extends React.Component{
    render(){
        return(
            <View style={styles.textStyle}>
                <Text> Instagram </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        justifyContent: 'center',
        alignItem: 'center',
        textSize: 20,
        color: 'red',
        fontWeight: 'bold'
    }
});