import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ContactScrenn = () => {
  return (
    <View>
      <Text style={styles.titre}> CONTACT</Text>
      <Text style={styles.texte}> Telephone : 00 00 00 00 00</Text>
      <Text style={styles.texte}> Adresse: 5 rue du magasin</Text>
      <Text style={styles.texte}> Mail : adressemail@gmail.com</Text>
    </View>
  )
}

export default ContactScrenn

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titre: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 100
    },
    texte: {
        fontSize:25,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30
    },
  });