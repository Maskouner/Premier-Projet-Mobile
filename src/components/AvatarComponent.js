import { StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import React from 'react'

const AvatarComponent = () => {
  return (
        <Avatar.Image style={styles.Avatar} size={55}  source={require('../../assets/logo-artisans-du-liege_3602x.png')}/>
  )
}

export default AvatarComponent

const styles = StyleSheet.create({
    Avatar: {
        justifyContent:'center',
    }
  
  });