import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useCreatePostMutation, useUpdatePostMutation} from '../services/post';

export default function CreatePost() {
  // let [createPost, responseInfo] = useCreatePostMutation();
  let [updatePost, responseInfo] = useUpdatePostMutation();

  console.log('responseInfo===>>>', responseInfo);
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Text>createPost</Text>
      <TouchableOpacity
        onPress={() => {
          createPost({
            title: 'foo',
            body: 'bar',

            userId: 1,
          });
        }}>
        <Text style={{fontSize: 30}}> Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          updatePost({
            id: 3,
            title: 'foo',
            body: 'bar',

            userId: 1,
          });
        }}>
        <Text style={{fontSize: 30}}> UPDate</Text>
      </TouchableOpacity>
    </View>
  );
}
