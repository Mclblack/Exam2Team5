/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './Styles/AppStyles';
import Main from './Comps/Main';

function App(){
  return(
    <View style={styles.container}>
      <Main/>

    </View>
  )
}

export default App;
