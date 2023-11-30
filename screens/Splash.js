import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-red-600" style={styles.container}>
      <Animatable.Text className="text-4xl text-blue-700 font-bold"
      animation="fadeInDownBig"
      duration={2000}>Splash
      </Animatable.Text >
    </View>
  )
}

const styles = StyleSheet.create({})

export default Splash;
