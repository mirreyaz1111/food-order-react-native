import React from 'react';
import {
  ScrollView,
  useColorScheme,
} from 'react-native';
import type { Node } from 'react';
import { Carousal } from '../components/Carousal';
import { Products } from '../components/product/Products';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const Homepage = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Carousal />
      <Products />
    </ScrollView>
  );
};