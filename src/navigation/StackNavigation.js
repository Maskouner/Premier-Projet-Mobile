import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import RealisationScrenn from '../screnns/RealisationScrenn'
import RealisationDetailScrenn from '../screnns/RealisationDetailScrenn'

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Réalisations" component={RealisationScrenn} />
                <Stack.Screen options={{headerShown:false}} name="RéalisationsDetails" component={RealisationDetailScrenn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation