import { StackNavigationProp } from '@react-navigation/stack';
import { BaseNavigationParams } from './BaseNavigationParams';
import { RouteProp } from '@react-navigation/native';
//defining route prop types here will make component more clean to read

export type SpecificEventScreenNavigationProp = StackNavigationProp<
  BaseNavigationParams,
  'SpecificEventScreen'
>;

export type SpecificEventScreenRouteProps = RouteProp<
  BaseNavigationParams,
  'SpecificEventScreen'
>;
