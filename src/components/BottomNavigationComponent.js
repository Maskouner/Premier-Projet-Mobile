import { BottomNavigation, Text, View } from 'react-native-paper'
import React from 'react'
import AcceuilScrenn from '../screnns/AcceuilScrenn'

const AcceuilRoute = () => {
    return(
        <>
        <Text>ACCEUIL</Text>
        <AcceuilScrenn/>
        </>  
    )  
} 


const SavoirFaireRoute = () => <Text>SAVOIR FAIRE</Text>

const RealisationsRoute = () => <Text>REALISATIONS</Text>

const ContactRoute = () => <Text>CONTACT</Text>

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