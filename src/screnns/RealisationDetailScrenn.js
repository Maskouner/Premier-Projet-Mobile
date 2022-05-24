import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



const RealisationDetailScrenn = () => {

    return (
        <View>
            <Image style={styles.image} source={require('../../assets/PorteFeuille.jpg')} />
            <Text style={styles.titre}> Porte Feuille Mandala</Text>
            <Text style={styles.description}>
                Un Porte Feuille fait main qui intégre une
                pochette à fermeture éclair pour vos
                pièces, un espace pour les billets,
                1 espace de rangements ainsi que 8
                rangement pour cartes
            </Text>
        </View>
    )
}

export default RealisationDetailScrenn

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50
    },
    titre: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 300,
        marginTop: 25,
    },
});