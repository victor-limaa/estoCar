import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, AsyncStorage, Image, TouchableOpacity } from 'react-native'
import ItemCar from '../components/itemCar'
import api from '../api'
import logo from '../../assets/logo.png'

export default function Car({route}) {
    
    const [car, setCar] = useState()

    useEffect(() => {
            const id = route.params.id
            
            async function getCar(){
                try{
                    const token = await AsyncStorage.getItem('authorization-token')
                    await api.get(`${id}`, {headers: {"authorization-token": token}})
                        .then(
                            res => setCar(res.data)
                        )

                } catch(err){
                    console.log(err)
                }
            }
            getCar()
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>
            {
                car ?
            <ItemCar image={car.image} placa={car.placa}
                marca={car.marca} modelo={car.modelo}
                cambio={car.cambio} valor={car.valor}
                opcionais={car.opcionais.map((item, index) => 
                    <Text key={index} style={styles.item}> {item} </Text>)} />
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        backgroundColor: '#303a52',
        width: '100%',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 40,
        resizeMode: "contain",
        alignSelf: 'center'
    },
    item: {
        backgroundColor: '#574b90',
        margin: 8,
        color: '#fff',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
    }
})