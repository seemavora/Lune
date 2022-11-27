import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputBox = (props) => {
    
    return (
        <View style={{paddingBottom: '10%'}}>
            <Text style={styles.header}>{props.heading}</Text>
            <TextInput style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor='grey'
                placeholderText
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
        fontSize: 15,  
        width: '85%',
        alignItems: 'center',
        // borderRadius: 50,
        // backgroundColor: '#8fbeea',
        paddingVertical: 12,
        
    },
    header: {
        fontSize: 15,  
    },
});

export default InputBox;
