import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { selectDestination, selectOrigin, setTravelTimeinformation } from '../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!origin || !destination) return;
    mapref.current.fitToSuppliedmarkers(["origin, destination"], {
    edgePadding: {top:50 , right:50 , bottom: 50 , left: 50 }});
  }, [origin,destination]);


  useEffect(() => {
    if(!origin || !destination) return;
    
    const getTravelTime = async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial & origin= ${origin.description} 
      &destination=${destination.description} 
      &key=${GOOGLE_MAPS_APIKEY} `
    ).then(res => res.json())
    .then(data => {
      dispatch(setTravelTimeinformation(data.rows[0].elements[0]));
    })
  };
    getTravelTime();
  }, [])



  return (
    <MapView
      ref={mapref}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      
      { origin && destination && (
        <MapViewDirections 
        origin= {origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
        />
      )}

      {origin?.location && (
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="origin"
        description={origin.description}
        identifier="origin"
      />)}

      {destination?.location && (
       <Marker
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title="destination"
        description={destination.description}
        identifier="destination"
      />)}
     </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
