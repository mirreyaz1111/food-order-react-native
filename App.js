/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Section } from './components/Section'
import { Carousal } from './components/Carousal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Products } from './components/product/Products';
import { Homepage } from './pages/Home';
import { OrdersPage } from './pages/Orders';
import { CartPage } from './pages/Cart';
import { LoginPage } from './pages/Login';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [currentMenu, setCurrentMenu] = useState("home");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Header title={currentMenu} />
        {currentMenu == "home" && <Homepage />}
        {currentMenu == "orders" && <OrdersPage />}
        {currentMenu == "cart" && <CartPage />}
        {currentMenu == "login" && <LoginPage />}
        <Footer selectedMenu={currentMenu} onMenuChange={(menu) => {
          setCurrentMenu(menu)
        }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});


export default App;
