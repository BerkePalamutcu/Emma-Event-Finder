import axios from 'axios';
import { EventsResponse } from '@src/interfaces/EventData';
import { API_KEY } from '@src/constants/apikey';

//These could be defined in a class.
export const getAllEvents = async (page: string): Promise<EventsResponse> => {
  const response = await axios.get<EventsResponse>(
    'https://app.ticketmaster.com/discovery/v2/events.json',
    {
      params: {
        apikey: API_KEY,
        page: page
      }
    }
  );
  return response.data;
};
