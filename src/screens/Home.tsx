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
import Movies from '../components/Movies';
import {getsearchdata} from '../utils/api';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any>([]);

  function getSearch() {
    console.log(search);
    getsearchdata(search).then(response => {
      console.log(JSON.stringify(response.data));
      setData(response.data);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#f0f0f0', '#f2c2c6']} style={{flex: 1}}>
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
            onPress={() => getSearch()}
            size={30}
          />
        </View>
        <Movies data={data}/>
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
    paddingRight: 10,
  },
});
