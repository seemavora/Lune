
import {StyleSheet, View, Text, SafeAreaView, ScrollView, Button, TextInput} from 'react-native'
// import EditScreenInfo from '../componets/EditScreenInfo';
import InputBox from '../components/InputBox';
import { RootStackScreenProps } from '../types';
import React, {useState} from 'react'

export default function NewAccount({navigation}: RootStackScreenProps<'NotFound'>) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const handleNameInput = (e:any) => {
        setName(e)
    }

    const handleEmailInput = (e:any) => {
        setEmail(e)
    }

    const handlePasswordInput = (e:any) => {
        setPassword(e)
    }

    const handleRepasswordInput = (e:any) => {
        setRepassword(e)
    }

    const submit = () => {
        console.log(name, email, password, repassword)
    }

    return (
        <SafeAreaView style={styles.topcontainer}>
            <ScrollView>
                <View style={{padding:'10%'}}>
                    <Text style={styles.container}></Text>
                    <View>
                        <InputBox
                            heading="Name"
                            placeholder="Enter Your Name"
                            customtextType="text"
                            onChangeText={handleNameInput}
                        />
                        <InputBox
                            heading="Email"
                            placeholder="Enter Your Email"
                            customtextType="emailAddress"
                            onChangeText={handleEmailInput}
                        />
                        <InputBox
                            heading="Password"
                            placeholder="Enter Your Password"
                            customtextType="password"
                            onChangeText={handlePasswordInput}
                        />
                        <InputBox
                            heading="Re-enter Password"
                            placeholder="Re-enter Your Password"
                            customtextType="password"
                            onChangeText={handleRepasswordInput}
                        />
                        <Button
                            title="Create New Account"
                            onPress={submit}
                        />
                    </View> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
    },
    container: {
        padding: '10%'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    input: {
        fontSize: 20,
        width: '80%'
    }
});
