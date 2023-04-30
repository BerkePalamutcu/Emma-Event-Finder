import axios from 'axios';
import { Event } from '@src/interfaces/EventData';
import { API_KEY } from '@src/constants/apikey';

export const getSpecificEventData = async (id: string): Promise<Event> => {
  const response = await axios.get<Event>(
    `https://app.ticketmaster.com/discovery/v2/events/${id}`,
    {
      params: {
        apikey: API_KEY
      }
    }
  );
  return response.data;
};
