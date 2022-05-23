import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const AcceuilScrenn = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titre}>ARTISANT DU LIÈGE</Text>
        <Text style={styles.paragraphe}>
        Bienvenue sur Artisans du liège, où nous vous proposons des produits en liège fabriqués à la main au 
        Portugal dans le respect des traditions portugaises du liège avec une qualité artisanale irréprochable.
        </Text>
        <Image style={styles.image} source={require('../../assets/liege_rouleau_720x.jpg')}/>
        
        <Text style={styles.paragraphe}>
            Sur cette application nous vous proposons de voir une presentation de notre entreprise et de nos different produits
            réalisées en liège
        </Text>
    </View>
  )
}

export default AcceuilScrenn

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titre: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraphe: {
        fontSize:20,
        textAlign: 'center'
    },
    image: {
        resizeMode: 'contain',
        width:'100%',
        height:200,
        marginTop: 25,
        marginBottom: 25 
    }
  });