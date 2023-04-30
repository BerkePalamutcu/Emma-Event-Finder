export type BaseNavigationParams = {
  WelcomeScreen: undefined;
  EventsScreen: undefined; //these 2 screens won't receive params from route that's why they are undefined
  SpecificEventScreen: { eventId: string };
};
