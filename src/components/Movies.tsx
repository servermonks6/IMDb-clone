import { useNavigation } from '@react-navigation/native';
import React, {FC} from 'react';
import {
  FlatList,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Image, Text} from 'react-native-elements';
import {DATA} from '../data';

interface MoviesProps {
  data: any;
}

const Movies: FC<MoviesProps> = ({data}) => {
  const navigation = useNavigation();
  
  const renderItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#95dbd4',
          flex: 1,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('MovieDetails', {id: item?.id})}
      >
        <Image source={{uri: item.image}} style={{height: 100, width: 75}} />
        <Text
          style={{
            color: '#fff',
            fontSize: 19,
            fontWeight: 'bold',
            marginHorizontal: 8,
            width:"60%"
          }}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.titles}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
