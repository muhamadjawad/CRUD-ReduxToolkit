import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Toolkit/store';
import Home from './src/Screens/home';
import CreatePost from './src/Screens/createPost';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: 'cyan', flex: 1}}>
        <CreatePost />
      </View>
    </Provider>
  );
}
