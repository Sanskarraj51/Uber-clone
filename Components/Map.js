import React from 'react';
import { StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const Map = () => {

    const origin = useSelector(selectOrigin);

    return (
        <MapView
          style={tw`flex`}
          mapType="mutedStandard"
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
        }}
      
      />
    )
}

export default Map;

const styles = StyleSheet.create({})
