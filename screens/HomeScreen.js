import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, Header,HomeHeader } from '../components';
import { getData, getCategories,getDataByCategory } from '../services/index.js';
import errors from '../utils/errors';
import utilfuncs from '../utils/utilfuncs';


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [Select, setSelect] = useState(0);
  const [hasCategories, setHasCategories] = useState(false);


  useEffect(() => {
    const response = async () => {
      try {
        const data = await getData();
        setData(data.articles);
      } catch (error) {
        console.error(errors.useEffectError);
      }
    };
    response();
  }, []);

  useEffect(() => {
    const response = async () => {
      try {
        if (!hasCategories) {
          const category = await getCategories();
          setCategory(category);
          setHasCategories(true);
        }

      } catch (error) {
        console.error(errors.useEffectError);
      }
    };
    response();
  }, [hasCategories]);


  
  return (
    <>
      <View className="flex-1">
        <HomeHeader  />
        <View className="px-2 py-2">
        <FlatList
              data={category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    className={
                      index == Select
                        ? 'px-4 py-1  mr-3 rounded-md bg-red-700'
                        : 'px-4 py-1  mr-3 rounded-md bg-gray-200'
                    }
                    onPress={() => {
                      setSelect(index);
                   getDataByCategory({ item });
                  
                    }}

                   >
                    <Text
                      className={
                        index == Select
                          ? 'text-white font-Regular'
                          : 'text-gray-600 font-Regular'
                      }>
                      {utilfuncs.upperFirstLetter(item)}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
        </View>
        <View className="px-2 py-2">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <Card item={item} navigation={navigation} index={index} />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen

