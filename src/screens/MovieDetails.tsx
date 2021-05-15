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
import {ScrollView} from 'react-native-gesture-handler';

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
      <LinearGradient colors={['#f0f0f0', '#f2c2c6']} style={{height: '100%'}}>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.poster !== '' && (
            <View style={{alignItems: 'center', marginTop: 25}}>
              <Image
                source={{uri: data?.poster}}
                style={{
                  height: Deviceheight / 2,
                  width: Deviceheight / 2.5,
                  marginHorizontal: 25,
                }}
              />
            </View>
          )}

          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.title2}>{data?.plot}</Text>
          {data.year !== '' && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Year:</Text>
              <Text style={styles.text}>{data?.year}</Text>
            </View>
          )}
          {data.rating !== '' && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>rating:</Text>
              <Text style={styles.text}>
                {data.rating} ({data.rating_votes}){' '}
              </Text>
            </View>
          )}

          <Divider style={styles.divider} />

          {data?.cast?.length !== 0 && (
            <>
              <Text
                style={[
                  styles.title2,
                  {
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  },
                ]}>
                Casts
              </Text>
              <View>
                {data?.cast?.map((item: any) => {
                  return (
                    <View style={{flexDirection: 'row',marginBottom:10}} key={item.actor_id}>
                      <Text style={[styles.text,{width:"45%"}]}>{item.actor}</Text>
                      <Text style={[styles.text,{width:"40%"}]}>{item.character}</Text>
                    </View>
                  );
                })}
              </View>
            </>
          )}
        </ScrollView>
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
    marginHorizontal: 15,
  },
  title2: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  divider: {
    backgroundColor: '#b2b2b2',
    height: 1,
    width: Devicewidth,
    marginVertical: 5,
  },
});
