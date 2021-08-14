import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import { store } from './Store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreens from './Screens/MapScreen';


export default function App() {
const Stack = createNativeStackNavigator();

  return (
   <Provider store={store}>
     <NavigationContainer>
      <SafeAreaProvider>

         <Stack.Navigator>

           <Stack.Screen 
           name="HomeScreen"
           component={HomeScreen} 
           options={{
             headerShown:false,
           }}
           />
             

         <Stack.Screen 
          name="MapScreen"
          component={MapScreens} 
          options={{
          headerShown:false,
         }}
        />
       

         </Stack.Navigator>

       
      </SafeAreaProvider>
     </NavigationContainer>
   </Provider>
   
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
