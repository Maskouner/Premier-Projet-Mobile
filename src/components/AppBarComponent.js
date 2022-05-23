import { Appbar } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import React from 'react'
import AvatarComponent from './AvatarComponent'

const AppBarComponent = () => {
  return (
    <Appbar.Header style={styles.Header}>
        <AvatarComponent/>
    </Appbar.Header>
  )
}

export default AppBarComponent

const styles = StyleSheet.create({
    Header: {
      backgroundColor: '#A57E5A',
      justifyContent: 'center',
    }
  });