import React, {useCallback, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MovieDetails: React.FC = () => {
  const [search, setSearch] = useState('');

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
