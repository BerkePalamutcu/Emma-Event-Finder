import { FlatList, Text, View, Dimensions, Alert } from 'react-native';
import React from 'react';
import { getAllEvents } from '@src/api/getEvents';
import { Event } from '@src/interfaces/EventData';
import EventCard from '@src/components/EventCard';
import { ActivityIndicator, FAB } from 'react-native-paper';
import { RefObject } from 'react';

const EventsScreen: React.FC = () => {
  /*Since the project is minimal there is no need to use another state management library like redux or rxJs*/
  const [eventData, setEventData] = React.useState<Event[]>([]);
  const [pageNumber, setPageNumber] = React.useState<string>('0');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isAtTop, setIsAtTop] = React.useState(true);

  const flatlistRef: RefObject<FlatList> = React.useRef(null);
  const windowHeight = Dimensions.get('window').height;

  /*This function's only duty is returning the event after calling getAllEvents API
    Instead of creating the function here another and possibly best approach would have been
    to create a class service in the API folder and define the function there as project size
    increases it would be easier to maintain.. However, 
    for the sake of simplicity of the project I chose this approach.
    I try to follow SOLID principles and separete the business logic from component by defining 
    different functions for each different purpose. 
  */
  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await getAllEvents(pageNumber);
      const events: Event[] = response._embedded.events;
      setEventData([...eventData, ...events]);
      setLoading(false);
    } catch (error) {
      //if API fails I catch the error here.
      console.log(error);
      Alert.alert('Something happened while fetching events');
      setLoading(false);
    }
  };

  const handleBottomReach = () => {
    setPageNumber(String(Number(pageNumber) + 1));
  };

  const handleNavigateTop = () => {
    flatlistRef.current?.scrollToIndex({ index: 0, animated: true });
  };

  //This is an expensive function that tracks scroll position that's why I use, useCallback hook to memoize
  const handleScroll = React.useCallback(
    (event: { nativeEvent: { contentOffset: { y: number } } }) => {
      const { contentOffset } = event.nativeEvent;
      setIsAtTop(contentOffset.y === 0);
    },
    []
  );

  /* By separating the logic the Effect seems much more cleaner.
    The only better way to make this component cleaner would be moving the API
    call logic into a service class. 
  */
  React.useEffect(() => {
    getEvents();
  }, [pageNumber]);

  return (
    <React.Fragment>
      <FlatList
        ref={flatlistRef}
        onEndReached={handleBottomReach}
        onScroll={handleScroll}
        contentContainerStyle={{
          padding: 30,
          paddingBottom: 50
        }}
        data={eventData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Event }) => <EventCard event={item} />}
      />
      {loading && (
        <View
          style={[
            { paddingVertical: 20, marginBottom: 20 },
            eventData.length === 0 && {
              transform: [{ translateY: -windowHeight / 3 }]
            }
          ]}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 10,
              color: 'red'
            }}
          >
            Loading Events...
          </Text>
          {/*This could have been rendered outside also like in the specific event screen
          But here I found it more convenient.
          */}
          <ActivityIndicator size={50} animating={true} color='red' />
        </View>
      )}
      {!isAtTop && (
        <FAB
          icon='arrow-up'
          size='small'
          style={{ position: 'absolute', bottom: 0, right: 0, margin: 16 }}
          onPress={handleNavigateTop}
        />
      )}
    </React.Fragment>
  );
};

export default EventsScreen;
