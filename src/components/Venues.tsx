import { View, Image, Linking } from 'react-native';
import React from 'react';
import { Event } from '@src/interfaces/EventData';
import { Divider, Text, Card, Button } from 'react-native-paper';

interface VenuesPropTypes {
  eventData?: Event;
}

const Venues: React.FC<VenuesPropTypes> = (props) => {
  return (
    <View>
      {props.eventData?._embedded?.venues.map((venue) => (
        <Card key={venue.id} style={{ padding: 10 }}>
          <View>
            <Text style={{ color: 'red' }} variant='titleMedium'>
              {venue.name}
            </Text>
            <Divider />
            <Card.Content>
              {venue.images && (
                <Image
                  source={{ uri: `${venue?.images[0]?.url}` }}
                  style={{ width: 320, height: 320, resizeMode: 'contain' }}
                />
              )}
              <View style={{ marginBottom: 10 }}>
                <Text variant='titleSmall' style={{ color: 'red' }}>
                  Venue Address
                </Text>
                <Divider />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ marginRight: 5 }}>{venue.state.name}</Text>
                  <Text>{venue.city.name}</Text>
                </View>
                <Text>{venue.address.line1}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ marginRight: 5 }}>
                    {venue.country.countryCode}
                  </Text>
                  <Text>{venue.postalCode}</Text>
                </View>
              </View>
              <View>
                <Text variant='titleSmall' style={{ color: 'red' }}>
                  Box Office Information
                </Text>
                <Divider />
                <Text style={{ marginBottom: 10 }}>
                  {venue.boxOfficeInfo?.acceptedPaymentDetail
                    ? venue.boxOfficeInfo?.acceptedPaymentDetail
                    : 'There is no accepted payment detail for this event.'}
                </Text>
                <Divider />
                <Text style={{ marginBottom: 10 }}>
                  {venue.boxOfficeInfo?.openHoursDetail
                    ? venue.boxOfficeInfo.openHoursDetail
                    : 'There is no open hours detail for this event.'}
                </Text>
                <Divider />
                <Text style={{ marginBottom: 10 }}>
                  Phone Number:{' '}
                  {venue?.boxOfficeInfo?.phoneNumberDetail
                    ? venue?.boxOfficeInfo?.phoneNumberDetail
                    : 'There is no Phone Number information'}
                </Text>
                <Divider />
                <Text style={{ marginBottom: 10 }}>
                  {venue?.boxOfficeInfo?.willCallDetail
                    ? venue?.boxOfficeInfo?.willCallDetail
                    : 'There is no willCall detail for this event.'}
                </Text>
                <Divider />
              </View>
              {props.eventData?.seatmap && (
                <Card.Actions style={{ alignSelf: 'center' }}>
                  <Button
                    onPress={() =>
                      Linking.openURL(props?.eventData!.seatmap?.staticUrl)
                    }
                  >
                    View Seat Map
                  </Button>
                </Card.Actions>
              )}
            </Card.Content>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default Venues;
