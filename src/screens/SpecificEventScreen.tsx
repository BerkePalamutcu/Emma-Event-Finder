import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SpecificEventScreenRouteProps } from '@src/types/SpecificEventScreen';
import { getSpecificEventData } from '@src/api/getSpecificEventData';
import { Alert } from 'react-native';
import { Event } from '@src/interfaces/EventData';
import { ScrollView } from 'react-native-gesture-handler';
import VenueAddress from '@src/components/VenueAddress';
import PriceRange from '@src/components/PriceRange';
import PreSales from '@src/components/PreSales';
import Venues from '@src/components/Venues';
import { ActivityIndicator, Text } from 'react-native-paper';

const SpecificEventScreen: React.FC = () => {
  const [eventData, setEventData] = React.useState<Event>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const route = useRoute<SpecificEventScreenRouteProps>();
  const { eventId } = route.params;

  const getSpecificEventDetails = async () => {
    try {
      setLoading(true);
      const response = await getSpecificEventData(eventId);
      if (response) {
        setLoading(false);
        setEventData(response);
      }
    } catch (error) {
      console.log(error);
      //Error handling
      Alert.alert('Something happened while fetching event data');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getSpecificEventDetails();
  }, []);

  if (loading || !eventData) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text variant='headlineSmall' style={{ color: 'red' }}>
          Loading...
        </Text>
        <ActivityIndicator animating={true} size={40} color='red' />
      </View>
    );
  }

  return (
    <ScrollView
      scrollIndicatorInsets={{ right: 1 }}
      contentContainerStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
      }}
    >
      {!loading && eventData && (
        <View style={{ display: 'flex' }}>
          <VenueAddress eventData={eventData} />
          <PriceRange eventData={eventData} />
          <PreSales eventData={eventData} />
          <Venues eventData={eventData} />
        </View>
      )}
    </ScrollView>
  );
};

export default SpecificEventScreen;
