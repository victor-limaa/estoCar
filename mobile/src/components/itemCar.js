import React from 'react'
import { StyleSheet, View, Text, ShadowPropTypesIOS, Image, ImageBackground } from 'react-native'
import backgroundImage from '../../assets/background.png'

export default function ItemCar(props){

    return(
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View>
            <Image source={{uri: props.image}} style={styles.image} />
            <View style={styles.box}>
                <Text style={styles.placa}>{props.placa}</Text>
                <Text style={styles.infoTitle}>Marca: </Text>
                <Text style={styles.infoText}>{props.marca}</Text>
                <Text style={styles.infoTitle}>Modelo: </Text>
                <Text style={styles.infoText}>{props.modelo}</Text>
                <Text style={styles.infoTitle}>Camio: </Text>
                <Text style={styles.infoText}>{props.cambio}</Text>
                <Text style={styles.infoTitle}>Itens do veículo: </Text>
                <Text style={styles.infoText}>{props.opcionais}</Text>
                
                <Text style={styles.valor}>R${props.valor}</Text>
            </View>
            
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        marginTop: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: 400,
        height: 300
    },
    box: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        width: 400,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    placa: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        color: '#fff'
    },
    infoTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10,
        color: '#fff'
    },
    infoText: {
        fontSize: 15,
        color: '#fff'
    },
    valor: {
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10,
        marginBottom: 40,
        textAlign: 'center',
        padding: 15,
        fontSize: 30,
        color: '#fff'
    }
})