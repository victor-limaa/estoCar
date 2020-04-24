import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Card(props){

    return(
        <View style={styles.boxContainer}>
                <Image source={{uri: props.image}} style={styles.image} />
                <View style={styles.info}>
                    <View>
                    <Text style={styles.infoTitle}>{props.modelo}</Text>
                    <Text style={styles.infoText}>{props.valor}</Text>
                    </View>
                    <TouchableOpacity onPress={props.navigation}>
                        <Text style={styles.button}>Mais Informações</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#303a52',
        width: 360,
        height: 300,
        marginBottom: 20,
        borderRadius: 5,
        elevation: 2,
    },
    image: {
        height: 200,
        width: 360,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    info: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    infoText: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        color: '#fc85ae',
        borderStyle: 'solid',
        borderColor: '#fc85ae',
        borderWidth: 1,
        fontSize: 15,
        borderRadius: 5,
        padding: 10,
        textAlign: "center"
    }
})