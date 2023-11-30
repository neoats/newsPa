import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

import { useFonts } from 'expo-font';





const HomeHeader = ({onSearch}) => {
  const loadFonts = async () => {
    useFonts({
     InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
     InterBold: require('../assets/fonts/Inter-Bold.ttf'),
   });
 };
  loadFonts();
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
  
      <View style={{ }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
       
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
        
          }}
        >
          NewsApp
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2
        
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search"
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
