import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputBox = (props) => {
    
    return (
        <View style={{paddingBottom: '10%'}}>
            <Text style={styles.input}>{props.heading}</Text>
            <TextInput style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='grey'
                textContentType={props.customTextType}
                secureTextEntry= {props.isSecure}
                onChangeText={props.onChangeText}
            >
            </TextInput>
        </View>
    )
}

const styles = new StyleSheet.create({
    input: {
        fontSize: 20,
        width: '85%',
    },
});

export default InputBox;
