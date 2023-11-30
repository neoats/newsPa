import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigation }) => {
  return (
    <View className="flex-row px-4 py-3 pt-10 justify-between items-center bg-white shadow-lg">
      <Text className="left-0">Baby if you give to me</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MagnifyingGlassIcon color={'#000'} size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})