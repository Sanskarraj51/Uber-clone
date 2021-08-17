import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../Components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard'

import RideOptionsCard from '../Components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreens = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
       
       <TouchableOpacity 
         onPress={() => navigation.navigate('HomeScreen')}
       style={tw`absolute bg-gray-100 z-50 p-3 rounded-full top-16 left-8 shadow-lg`} >
         <Icon 
         name="menu"

         />
       </TouchableOpacity>



      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
             component={NavigateCard}
              options=
            {{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RideOptionsCard"
             component={RideOptionsCard}
            options=
            {{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreens;

const styles = StyleSheet.create({});
