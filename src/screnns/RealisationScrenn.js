import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RealisationScrenn = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.titre}> NOS REALISATIONS</Text>
          <View style={styles.viewprincipale}>
              <View style={styles.viewsecondaire}>
                  <Image style={styles.image} source={require('../../assets/PorteFeuille.jpg')} />
                  <Text style={styles.texte}> Porte Feuille</Text>
              </View>
              <View style={styles.viewsecondaire}>
                  <Image style={styles.image} source={require('../../assets/PorteMonnaie.jpg')} />
                  <Text style={styles.texte}> Porte-Monnaie</Text>
              </View>
          </View>
          <View style={styles.viewprincipale}>
            <View style={styles.viewsecondaire}>
                <Image style={styles.image} source={require('../../assets/Sac.jpg')} /> 
                <Text style={styles.texte2}> Sac</Text>
            </View>
            <View style={styles.viewsecondaire}>
                <Image style={styles.image} source={require('../../assets/Ceinture.jpg')} /> 
                <Text style={styles.texte2}> Ceinture</Text>
            </View>
          </View>
      </View>
   
  )
}

export default RealisationScrenn

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    viewprincipale: {
        flex: 1,
        flexDirection:'row'
      },
      texte: {
        fontSize:20,
        textAlign: 'center',
    },
    texte2: {
        fontSize:20,
        textAlign: 'center',
        marginBottom: 55,
    },
      viewsecondaire: {
        flex: 0.5,
        justifyContent:'center'
      },
    titre: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        resizeMode: 'contain',
        width:'100%',
        height:250,
        marginTop: 25,     
    },
  });