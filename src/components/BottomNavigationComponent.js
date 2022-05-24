import { BottomNavigation, Text, View } from 'react-native-paper'
import React from 'react'
import AcceuilScrenn from '../screnns/AcceuilScrenn'
import SavoirFaireScrenn from '../screnns/SavoirFaireScrenn'
import RealisationScrenn from '../screnns/RealisationScrenn'
import StackNavigation from '../navigation/StackNavigation'
import ContactScrenn from '../screnns/ContactScrenn'

const AcceuilRoute = () => {
    return(
        <>
        <AcceuilScrenn/>
        </>  
    )  
} 


const SavoirFaireRoute = () => {
  return(
      <>
      <SavoirFaireScrenn/>
      </>  
  )  
} 

const RealisationsRoute = () => {
  return(
      <>
      <StackNavigation/>
      </>  
  )  
} 

const ContactRoute = () => {
  return(
      <>
      <ContactScrenn/>
      </>  
  )  
} 

const BottomNavigationComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'acceuil', title: 'Acceuil', icon: 'home' },
      { key: 'savoirfaire', title: 'Savoir-Faire', icon: 'hammer-screwdriver' },
      { key: 'realisations', title: 'Realisations', icon: 'package-variant-closed' },
      { key: 'contact', title: 'Contact', icon: 'information' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        acceuil: AcceuilRoute,
        savoirfaire: SavoirFaireRoute,
        realisations: RealisationsRoute,
        contact: ContactRoute,
      });

  return (
    <BottomNavigation
    barStyle={{ backgroundColor: '#A57E5A'}}
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
  )
}

export default BottomNavigationComponent
