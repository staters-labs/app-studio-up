import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../types';

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

export function useRootNavigation() {
  return useReactNavigation<RootStackNavigationProp>();
}

export function useTabNavigation() {
  return useReactNavigation<MainTabNavigationProp>();
}
