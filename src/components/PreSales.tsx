import { View } from 'react-native';
import React from 'react';
import { Card, Text, Divider } from 'react-native-paper';
import { Event } from '@src/interfaces/EventData';

interface PreSalesProps {
  eventData?: Event;
}

const PreSales: React.FC<PreSalesProps> = (props) => {
  return (
    <Card style={{ padding: 20, marginBottom: 10 }}>
      {props.eventData?.ticketLimit?.info && (
        <Text style={{ color: 'blue' }}>
          {props.eventData?.ticketLimit?.info}
        </Text>
      )}
      <Text style={{ color: 'red' }} variant='titleMedium'>
        Pre-Sales
      </Text>
      <Divider />
      {props.eventData?.sales?.presales ? (
        props.eventData?.sales?.presales?.map((sale, index) => (
          <React.Fragment key={index}>
            <Text style={{ fontWeight: '500' }}>{sale.name}</Text>
            <Text>{new Date(sale.startDateTime).toLocaleString()}</Text>
          </React.Fragment>
        ))
      ) : (
        <Text>There is no Pre-sale information for this event</Text>
      )}
      <Text style={{ color: 'red' }} variant='titleMedium'>
        Public Sales
      </Text>
      <Divider />
      <Text>
        Start:{' '}
        {new Date(
          props.eventData?.sales.public.startDateTime!
        ).toLocaleString()}
      </Text>
      <Text>
        End:{' '}
        {new Date(props.eventData?.sales.public.endDateTime!).toLocaleString()}
      </Text>
    </Card>
  );
};

export default PreSales;
