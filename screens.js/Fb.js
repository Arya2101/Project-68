import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View style={styles.textStyle}>
                <Text> FaceBook </Text>
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