import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const SavoirFaireScrenn = () => {
  return (
    <View>
      <Text style={styles.titre}>SAVOIR-FAIRE</Text>
      <Image style={styles.image}  source={require('../../assets/chenes_lieges_portugal_720x.jpg')}/>
      <Text style={styles.paragraphe1}>
            Tout nos produits sont fabriquers en liège qui est une matiere naturelle,vegan et écologique car le liege est issu de 
            l'écorce d'un arbre,le chêne-liège qui permet de produire un tissu végétal d’une grande qualité, à la fois très résistant
            , imperméable et souple il n'est donc pas nécessaire d'abattre l'arbre pour récuperer l'ecorce du liège. 
      </Text>
      <Text style={styles.paragraphe2}>
          Avec le liège nous réalisons différent produits en maroquinerie tel que des portes feuilles,porte-monnaie, sac et ceinture,
          vous pouvez voir ces produits dans l'onglet "réalisation"
      </Text>
    </View>
  )
}

export default SavoirFaireScrenn

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titre: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    paragraphe1: {
        fontSize:16,
        textAlign: 'center',
        marginBottom: 30
    },
    paragraphe2: {
        fontSize:16,
        textAlign: 'center'
    },
    image: {
        resizeMode: 'contain',
        width:'100%',
        height:250,
        marginTop: 25,
        marginBottom: 25 
    }
  });