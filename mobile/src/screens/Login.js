import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage, Alert, ImageBackground, Image } from 'react-native'

import api from '../api'

import logo from '../../assets/logo.png'

export default function Login ( {navigation} ){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if(email && password){
            try{
                const res = await api.post('login', {email: email, password: password})
                await AsyncStorage.setItem('authorization-token', res.data).then(
                    navigation.navigate('Home')
                )
            } catch(err){
                console.log(err)
            }
        }
        }
    

    return(
        <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.loginBox}>
                        <TextInput style={styles.input} 
                            onChangeText={text => setEmail(text)} 
                            keyboardType='email-address' placeholder='Email' />
                        <TextInput style={styles.input} 
                            onChangeText={password => setPassword(password)} 
                            secureTextEntry={true} placeholder='Senha' />
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.button}>Acessar</Text>
                        </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303a52'
    },

    loginBox: {
        marginTop: 150,
    },

    logo: {
        marginBottom: 30,
        width: 230,
        height: 70,
        resizeMode: "contain",
        marginTop: 130,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    input: {
        width: 350,
        height: 50,
        padding: 10,
        color: '#edf0f5',
        fontSize: 15,
        backgroundColor: 'rgba(133, 158, 218, 0.2)',
        borderRadius: 4,
        alignSelf: "center",
        marginBottom: 30,
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#9e579d',
        color: '#fff',
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        padding: 10,
        alignSelf: 'center',
        marginTop: 50
    }
})