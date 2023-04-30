import React from 'react';
import { Event } from '@src/interfaces/EventData';
import { Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SpecificEventScreenNavigationProp } from '@src/types/SpecificEventScreen';

interface EventCardProps {
  event: Event;
}

//improving the performance of the flatlist with memoizing the component props
const EventCard: React.FC<EventCardProps> = React.memo(({ event }) => {
  const [showMore, setShowMore] = React.useState(false);

  const navigation = useNavigation<SpecificEventScreenNavigationProp>();

  const handleShowMore = () => {
    setShowMore(true);
  };

  const navigateToEventScreen = (id: string) => {
    navigation.navigate('SpecificEventScreen', { eventId: id });
  };

  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Content>
        <Text variant='titleLarge'>{event.name}</Text>
        {/*Even thoguh the event may have more than 1 classification for the sake of 
        project I would like to show the first classification
        */}
        <Text variant='titleMedium'>{event.classifications[0].genre.name}</Text>
        <Text variant='titleMedium'>
          {event.classifications[0].segment.name}
        </Text>
        <Card.Cover
          source={
            event.images.length > 0
              ? { uri: event.images[0].url }
              : { uri: 'https://picsum.photos/700' }
          }
        />
        <Text variant='titleMedium'>Start :{event.dates.start.localDate}</Text>
        <Text variant='titleSmall' style={{ color: 'red' }}>
          {event.dates.status.code.toUpperCase()}
        </Text>
        <Text variant='bodyMedium' style={{ marginTop: 10 }}>
          {event.info?.length > 50 && !showMore
            ? event.info.substring(0, 49) + '...'
            : event.info}
        </Text>
        {!showMore && event.info?.length > 20 && (
          <Button mode='text' onPress={handleShowMore}>
            Show More
          </Button>
        )}
      </Card.Content>
      <Card.Actions
        style={{
          display: 'flex',
          alignSelf: 'center'
        }}
      >
        <Button
          style={{ display: 'flex' }}
          mode='contained-tonal'
          onPress={() => navigateToEventScreen(event.id)}
        >
          View Event
        </Button>
      </Card.Actions>
    </Card>
  );
});

export default EventCard;
