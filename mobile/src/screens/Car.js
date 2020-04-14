import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, AsyncStorage } from 'react-native'
import ItemCar from '../components/itemCar'
import api from '../api'

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
            {
                car ?
            <ItemCar image={car.image} placa={car.placa}
                marca={car.marca} modelo={car.modelo}
                cambio={car.cambio} valor={car.valor}
                opcionais={car.opcionais.map((item, index) => 
                    <Text key={index}>{item} | </Text>)} />
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5959',
        justifyContent: "center",
        alignItems: "center"
    }
})