import { View } from 'react-native';
import React from 'react';
import { Card, Text, Divider } from 'react-native-paper';
import { Event } from '@src/interfaces/EventData';

interface PriceRangeProps {
  eventData?: Event;
}

const PriceRange: React.FC<PriceRangeProps> = (props) => {
  return (
    <Card style={{ marginBottom: 10, padding: 20 }}>
      <Text style={{ color: 'red' }} variant='titleMedium'>
        Price List
      </Text>
      <Divider />
      {props.eventData?.priceRanges ? (
        props.eventData?.priceRanges?.map((price) => (
          /*I use Math.random for key but it's not the best practice occasionally. 
            I didn't receive specific id from API for that and i didn't want to add more
            dependencies to the project

            */
          <View key={Math.random()}>
            <Text>
              MAX: {price.max}
              {price.currency}
            </Text>
            <Text>
              MIN: {price.min}
              {price.currency}
            </Text>

            <Text>Type: {price.type}</Text>
          </View>
        ))
      ) : (
        <Text>There is no current price range for this event</Text>
      )}
    </Card>
  );
};

export default PriceRange;
