import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity , View, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id:"Uber-X-123",
    title:"Uber-X",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456",
    title:"Uber-XL",
     multiplier:1.2,
     image:"https://links.papreact.com/5w8"
  },
  {
    id:"Uber-LUX-789",
    title:"Uber-LUX",
     multiplier:1.75,
     image:"https://links.papreact.com/7pf"
  },
];

const SURGE_CHARGE_RATE= 1.5;


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [Selected, setSelected] = useState(null);
  const traveltimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
    
    <View>
     <TouchableOpacity style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
     onPress={() => navigation.navigate("NavigationCard")}>
       <Icon 
       name="chevron-left" type="font-awesome"
       />
     </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride- {traveltimeInformation?.distance?.text} </Text>
    </View>
    <FlatList 
       
       data={data}
       keyExtractor={(item) => item.id}
       renderItem={({item: {id ,title , multiplier , image}, item}) => (
         <TouchableOpacity
         onPress={() => setSelected(item)}
         style={tw`flex-row items-center justify-between px-10 ${id === Selected?.id && "bg-gray-100"} `}>
           <Image 
           style={{
             width:100,
             height:100,
             resizeMode: "contain",
           }}
           source={{uri: image}}
           />
           <View style={tw`-ml-6`} >
             <Text style={tw`text-xl font-semibold`}>{title}</Text>
             <Text>{traveltimeInformation?.duration?.text} Travel Time</Text>
           </View>
           <Text style={tw`text-xt`} >
             
             {new Intl.NumberFormat('en-gb', {
               style: 'currency',
               currency: 'INR'
             }).format(
                 
              (traveltimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100

             )
             }


           </Text>
         </TouchableOpacity>
       )}

    />
    <View>
      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3
      ${!selected && 'bg-gray-300'}  `}>
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});