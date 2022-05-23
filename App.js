import { StyleSheet,View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppBarComponent from './src/components/AppBarComponent';
import BottomNavigationComponent from './src/components/BottomNavigationComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <AppBarComponent/> 
        <BottomNavigationComponent/>
      </SafeAreaProvider>
     
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
