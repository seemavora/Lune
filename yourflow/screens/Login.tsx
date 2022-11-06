import React, {useState} from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Button, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import InputBox from '../components/InputBox';
// import { Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Login({ navigation }: RootStackScreenProps<'NotFound'>)  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e:any) => {
        setEmail(e)
    }

    const submit = () => {
        console.log(email, password)
    }

    

    const handlePasswordInput = (e:any) => {
        setPassword(e)
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ padding: '10%' }}>
                    <Text style={styles.title}>Login</Text>
                    
                    <View style={styles.separator} />
                    <InputBox
                        heading="Email"
                        placeholder = "Email"
                        customTextType = "emailAddress"
                        onChangeText={handleEmailInput}
                    />
                    <InputBox
                        heading = "Password"
                        placeholder = "Password"
                        customtextType = "emailAddress"
                        isSecure = {true}
                        onChangeText={handlePasswordInput}
                        />
                    <Button
                        title="Login"
                        color="pink"
                        accessibilityLabel="Login"
                        onPress={submit}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
    },
    container: {
        padding: '10%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    input: {
        fontSize: 20,
        width: '80%',

    }
});
