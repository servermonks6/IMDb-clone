import React, {FC, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;


const Login: FC = ({navigation}: any) => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');

  const onLoginPress = () => {
    console.log(email, password);

    navigation.navigate('Home');
  };

  return (
  
    <SafeAreaView style={{ flex: 1}}>
    <LinearGradient colors={['#f0f0f0', '#f2c2c6']} style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
         <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 30}}>
          Login
        </Text>
        <View style={{marginTop: 20}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => setEmail(value)}
              value={email}
              placeholder="Email"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => setPassword(value)}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      </SafeAreaView>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    color: '#F5F5F5',
  },
  loginBtn: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5566D',
    padding: 10,
    elevation: 7,
    borderRadius: 10,
    marginTop: 20,
  },
  textInput: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    padding: 10,
    borderColor: '#747474',
    borderWidth: 0.9,
    borderRadius: 10,
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});