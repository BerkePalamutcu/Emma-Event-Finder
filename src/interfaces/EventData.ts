/*
All the interface from  APIs will be used here
because they are all related to EventData.
*/

export interface Events {
  events: Event[];
}
export interface EventsResponse {
  _embedded: _embedded;
  pages: Page;
}

export interface Event {
  accessibility: Accessability;
  ageRestrictions: AgeRestrictions;
  id: string;
  type: string;
  distance: number;
  units: string;
  location: location;
  locale: string;
  name: string;
  description: string;
  additionalInfo: string;
  url: string;
  images: ImageData[];
  dates: DateInformation;
  info: string;
  pleaseNote: string;
  priceRanges: PriceData[];
  productType: string;
  classifications: Classification[];
  ticketLimit: limitMessage;
  _embedded?: Embedded;
  sales: SaleInformation;
  seatmap: SeatMap;
}

interface SeatMap {
  staticUrl: string;
}

interface SaleInformation {
  presales: Presale[];
  public: PublicSale;
}

interface Embedded {
  venues: Venue[];
}

interface Presale {
  endDateTime: string;
  name: string;
  startDateTime: string;
}

interface PublicSale {
  endDateTime: string;
  startDateTime: string;
}

interface Venue {
  accessibleSeatingDetail: string;
  address: line1;
  boxOfficeInfo: BoxOfficeInfo;
  city: City;
  country: Country;
  generalInfo: GeneralInfo;
  images: ImageData[];
  markets: Market[];
  name: string;
  parkingDetail: string;
  state: State;
  timezone: string;
  type: string;
  id: string;
  postalCode: string;
}

interface _embedded {
  events: Event[];
}

interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

interface Market {
  id: string;
  name: string;
}

interface State {
  stateCode: string;
  name: string;
}

interface GeneralInfo {
  childRule: string;
  generalRule: string;
}

interface Country {
  name: string;
  countryCode: string;
}

interface City {
  name: string;
}

interface BoxOfficeInfo {
  acceptedPaymentDetail: string;
  openHoursDetail: string;
  phoneNumberDetail: string;
  willCallDetail: string;
}

interface line1 {
  line1: string;
}

interface PriceData {
  currency: string;
  max: number;
  min: number;
  type: string;
}

interface limitMessage {
  info: string;
}

interface Accessability {
  ticketLimit: number;
}

interface AgeRestrictions {
  legalAgeEnforced: boolean;
}

interface Classification {
  primary: boolean;
  segment: Segment;
  genre: Segment;
}

interface Segment {
  name: string;
  id: string;
}

interface location {
  latitude: number;
  longitude: number;
}

interface ImageData {
  url: string;
  width: number;
  height: number;
  fallback: boolean;
  attribution: string;
}

interface DateInformation {
  start: BaseDateInformations;
  end: EndDateInformations;
  access: AccessTime;
  spanMultipleDays: boolean;
  status: Status;
}

interface BaseDateInformations {
  localDate: string;
  dateTime: string;
  dateTBD?: boolean;
  dateTBA?: boolean;
  timeTBA?: boolean;
  noSpecificTime: boolean;
  localTime: string;
}

interface AccessTime {
  startDateTime: string;
  startApproximate: boolean;
  endDateTime: string;
  endApproximate: boolean;
}

interface Status {
  code: EventStatusCode;
}

//In a big project I would open another folder for enums.
enum EventStatusCode {
  OnSale = 'onsale',
  OffSale = 'offsale',
  Canceled = 'canceled',
  Postponed = 'postponed',
  Rescheduled = 'rescheduled'
}

interface EndDateInformations extends BaseDateInformations {
  approximate: boolean;
}
