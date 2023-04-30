import { View, Image } from 'react-native';
import React from 'react';
import { Text, Card, Divider } from 'react-native-paper';
import { Event } from '@src/interfaces/EventData';

interface VenueAddressProps {
  eventData?: Event;
}

const VenueAddress: React.FC<VenueAddressProps> = (props) => {
  return (
    <React.Fragment>
      {props.eventData?.images && (
        <Image
          source={{ uri: props.eventData?.images[0].url }}
          style={{
            width: 320,
            height: 320,
            resizeMode: 'contain',
            display: 'flex',
            alignSelf: 'center'
          }}
        />
      )}
      <Text variant='titleLarge'>{props.eventData?.name}</Text>

      <Card style={{ padding: 20, marginBottom: 10 }}>
        <Text variant='titleMedium' style={{ color: 'red' }}>
          {props.eventData?.dates.status.code.toUpperCase()}
        </Text>
        <Divider />
        <Text>Starts at: {props.eventData?.dates.start.localDate}</Text>
        <Text>Hour: {props.eventData?.dates.start.localTime}</Text>
        {props.eventData?.dates.end && (
          <Text>Ends: {props.eventData?.dates.end?.localDate}</Text>
        )}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text style={{ display: 'flex', marginRight: 10 }}>Categories:</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Text style={{ marginRight: 5, color: 'blue' }}>
              {props.eventData?.classifications[0].genre.name},
            </Text>
            <Text style={{ color: 'green' }}>
              {props.eventData?.classifications[0].segment.name}
            </Text>
          </View>
        </View>
      </Card>
    </React.Fragment>
  );
};

export default VenueAddress;
