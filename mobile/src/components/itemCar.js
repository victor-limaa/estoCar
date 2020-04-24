import React from 'react'
import { StyleSheet, View, Text, ShadowPropTypesIOS, Image, ImageBackground } from 'react-native'

export default function ItemCar(props){

    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri: props.image}} style={styles.image} />
                <View style={styles.modelo}>
                    <Text style={styles.modeloText}>{props.modelo}</Text>
                </View>
                <Text style={styles.infoTitle}>Marca: </Text>
                <Text style={styles.infoText}>{props.marca}</Text>
                <Text style={styles.infoTitle}>Camio: </Text>
                <Text style={styles.infoText}>{props.cambio}</Text>
                <Text style={styles.infoTitle}>Itens do veículo: </Text>
                <View style={styles.items}>{props.opcionais}</View>
                
                <Text style={styles.infoTitle}>Valor: </Text>
                <Text style={styles.valor}>R${props.valor},00</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    image: {
        width: '100%',
        height: 300,
    },
    modelo: {
        backgroundColor: '#303a52',
        color: '#fff',
        height: 55,
        justifyContent: "center",
        paddingLeft: 15,
    },
    modeloText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    infoTitle: {
        fontSize: 15,
        marginTop: 10,
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    valor: {
        borderRadius: 10,
        marginBottom: 40,
        fontSize: 25,
        fontWeight: 'bold'
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})