import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import Splash from './screens/Splash'
import Search from './components/Search'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createStackNavigator();
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'gray' }}>
      <App />
    </SafeAreaView>
  );
};
