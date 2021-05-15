import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getmovieDetails} from '../utils/api';
import {Header, Text, Divider} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const MovieDetails: FC = ({route, navigation}: any) => {
  const {id} = route.params;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getmovieDetails(id).then(response => {
      console.log(JSON.stringify(response.data));

      setData(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: navigation.goBack,
        }}
        centerComponent={{
          text: 'Movie DEtails',
          style: {color: '#fff', fontSize: 18},
        }}
      />
      <LinearGradient colors={['#f0f0f0', '#f2c2c6']} style={{height: '100%'}}>
        <View style={{alignItems:"center",marginTop:25}}>
          <Image
            source={{uri: data?.poster}}
            style={{
              height: Deviceheight / 2.5,
              width: Deviceheight / 3,
              marginHorizontal: 25,
            }}
          />
        </View>

        <Text style={styles.title}>{data.title}</Text>
        
        {/* <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>height:</Text>
          <Text style={styles.text}>{data.height}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>weight:</Text>
          <Text style={styles.text}>{data.weight}</Text>
        </View> */}

        <Divider style={styles.divider} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3EBF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: '700',
  },
  title2: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: '700',
  },
  divider: {
    backgroundColor: '#b2b2b2',
    height: 1,
    width: Devicewidth,
    marginVertical: 5,
  },
});
