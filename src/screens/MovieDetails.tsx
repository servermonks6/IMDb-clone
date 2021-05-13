import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getmovieDetails } from '../utils/api';

const MovieDetails: FC = ({route, navigation}: any) => {
  const {id} = route.params;
  console.log({id});

  useEffect(() => {
    getmovieDetails(id).then(response => {
      console.log(JSON.stringify(response.data));

      // setData(response.data);
    });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#f0f0f0', '#f2c2c6']} style={{flex: 1}}>
        <Text>Details</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
