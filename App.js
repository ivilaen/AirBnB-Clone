import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="auto" />
      <Router/>
      {/* <DestinationSearchScreen/> */}
      
    </>
  );
};

export default App;
