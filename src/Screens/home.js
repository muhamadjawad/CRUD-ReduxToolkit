import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetPostByIdQuery,
} from '../services/post';

export default function Home(props) {
  let {isLoading, data} = useGetAllPostQuery();

  let PostById = useGetPostByIdQuery(3);

  let [deletePost, res] = useDeletePostMutation();
  //   console.log('deletePost', deletePost);
  console.log('REsponse====> ', res);

  //   console.log('PostById===>', PostById.data);
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      {isLoading ? (
        <View style={{backgroundColor: 'red', height: 60, width: 60}} />
      ) : null}

      <TouchableOpacity onPress={() => deletePost(3)}>
        <Text style={{fontSize: 20}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
