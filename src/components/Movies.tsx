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
import {Text} from 'react-native-elements';
import {DATA} from '../data';

const Movies: FC = () => {
  const renderItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        marginBottom: 8,
      }}>
      <View
        style={{
          backgroundColor: '#95dbd4',
          flex: 1,
          height: 50,
          justifyContent: 'center',
        }}>
        <TouchableOpacity 
        // onPress={() => navigation.navigate('GRDetails', {gr: item})}
        >
        <Text
          style={{color: '#fff', fontSize: 16, marginHorizontal: 8}}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {item.id}-{item.name}
        </Text>
        </TouchableOpacity>
      </View>
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
            data={DATA}
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
