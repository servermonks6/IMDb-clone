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
import {Icon} from 'react-native-elements';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#fdfffe', '#95dbd4']} style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            onChangeText={search => setSearch(search)}
            style={{
              fontSize: 18,
              padding: 12,
              flexGrow: 1,
            }}
          />

          <Icon
            name="search"
            type="evilicon"
            color="#000"
            onPress={() => console.log('hello')}
           size={30}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:10
  },
});
