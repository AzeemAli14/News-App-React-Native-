import MainStack from './src/Navigation/MainStack';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView>
        <MainStack />
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default App;
