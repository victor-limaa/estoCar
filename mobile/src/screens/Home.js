import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ImageBackground, Image, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'
import api from '../api'
import logo from '../../assets/logo.png'
import Card from '../components/card'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home( {navigation} ){

    const [car, setCar] = useState()

    useEffect(() => {
        async function getCar(){
            const token = await AsyncStorage.getItem('authorization-token')
            await api.get('home', 
                {headers : {"authorization-token": token}}).then(
                    res => setCar(res.data)
                )
        }
        getCar()
    },[])

    const handleLogout = async () => {
        await AsyncStorage.removeItem('authorization-token')
        navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.logo} />
                    <TouchableOpacity onPress={handleLogout}>
                        <Icon name='power-off' size={25} color='#fff' />
                    </TouchableOpacity>
                </View>
                
                <FlatList data={car} showsVerticalScrollIndicator={false} renderItem={
                    ({item, index}) => (
                        <Card key={index} id={item._id}
                        image={item.image}
                        placa={item.placa}
                        marca={item.marca}
                        modelo={item.modelo}
                        valor={item.valor}
                        navigation={() => {navigation.navigate('Car', {id: item._id})}} />
                    )
                } />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e5e5e5'
    },
    header: {
        backgroundColor: '#303a52',
        width: '100%',
        height: 65,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 40,
        resizeMode: "contain",
        alignSelf: 'center'
    }
})