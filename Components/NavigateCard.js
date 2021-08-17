import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../slices/navSlice';
import NavFavour from './NavFavour';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            
            placeholder="where to?"
            styles={toInputBoxStyles}
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            retunKeyType={'search'}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
            }}
          />
        </View>
        <NavFavour/>
      </View>
      <View 
      style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('RideOptionsCard')}
        style={tw`flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full `}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="white"
            size={16}
          />
          <Text style={tw`text-center text-white`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
