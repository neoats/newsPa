import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const Card = ({ item }) => {
 
    return (
      <View className="px-1 py-1" >
        <Image source={{ uri: item.urlToImage ? item.urlToImage : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnews&psig=AOvVaw1A5TNcrrMiAe1QL9sDH8c_&ust=1697059292148000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDF8NO07IEDFQAAAAAdAAAAABAE' }} className="h-48 w-full rounded-md"
          resizeMethod="resize" />
        <View className="absolute  top-1 right-1 bg-red-800 px-1 rounded-md  border">
          <Text className="text-xs text-white py-1 ">
            {item.source.name}
          </Text>
        </View>
        <View className=" px-2 py-2 my-2  ">
          <View className="  px-2 my-2">
            <Text className="text-sm text-gray-700">{item.title}</Text>
            <Text className="text-xs my-2">{item.description}</Text>
            <View className="flex-row justify-between items-center  my-2">
              <Text className="text-xs  text-gray-700 ">{item.author}</Text>
              <Text className="text-xs text-gray-700 ">
                {item.publishedAt.toLocaleString('en-GB', { timeZone: 'UTC' })}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-red-800 px-4 py-1.5 mt-2 w-32 justify-center items-center rounded-md flex-row space-x-2 border"
              onPress={() =>
                navigation.navigate('NewsViewer', {
                  url: item.url,
                })
              }>
              <Text className="text-white text-xs font-Medium">Read More</Text>
              <ArrowRightIcon color="#fff" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )



}

export default Card

const styles = StyleSheet.create({})