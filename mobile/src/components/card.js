import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Card(props){

    return(
        <View style={styles.boxContainer}>
                <Image source={{uri: props.image}} style={styles.image} />
                <View style={styles.info}>
                    <View>
                    <Text style={styles.infoTitle}>{props.placa}</Text>
                    <Text style={styles.infoText}>{props.marca} {props.modelo}</Text>
                    </View>
                    <TouchableOpacity onPress={props.navigation}>
                        <Text style={styles.button}>Veja mais</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#e9e9e9',
        width: 350,
        marginBottom: 15,
        borderRadius: 10,
        padding: 5
    },
    image: {
        height: 250,
        width: '100%',
        resizeMode: "contain",
        borderRadius: 3
    },
    info: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoText: {
        fontSize: 20
    },
    button: {
        backgroundColor: '#ffcc00',
        color: '#fff',
        fontSize: 15,
        borderRadius: 5,
        padding: 5,
        width: 150,
        textAlign: "center",
        marginTop: 25
    }
})