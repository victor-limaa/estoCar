import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage, Alert, ImageBackground, Image } from 'react-native'

import api from '../api'

import backgroundImg from '../../assets/background.png'
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
            <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.loginBox}>
                    <View>
                        <TextInput style={styles.input} 
                            onChangeText={text => setEmail(text)} 
                            keyboardType='email-address' placeholder='Email' />
                        <TextInput style={styles.input} 
                            onChangeText={password => setPassword(password)} 
                            secureTextEntry={true} placeholder='Senha' />
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.button}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logo: {
        marginBottom: 30,
    },

    backgroundImg: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 300,
        height: 50,
        marginBottom: 40,
        padding: 10,
        borderBottomColor: '#ffcc00',
        borderStyle: "solid",
        borderBottomWidth: 1,
        color: '#fff',
        textAlign: "center",
        fontSize: 15
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#ffcc00',
        color: '#fff',
        fontSize: 25,
        borderRadius: 10,
        textAlign: "center",
        padding: 5
    }
})