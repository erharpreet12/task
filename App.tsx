import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomePage from './src/pages/HomePage';
import Leagues from './src/pages/Leagues';
import Research from './src/pages/Research';
import Leaderboard from './src/pages/Leaderboard';
import Profile from './src/pages/Profile';
import Colors from './src/common/Colors';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.lightGrey,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Image
              tintColor={color}
              source={require('./src/assets/home.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Image
              tintColor={color}
              source={require('./src/assets/trophy.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Research"
        component={Research}
        options={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              tintColor={color}
              source={require('./src/assets/find.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              tintColor={color}
              source={require('./src/assets/ranking.png')}
              style={[styles.tabIcon]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              tintColor={color}
              source={require('./src/assets/user.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomTabs"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </BottomSheetModalProvider>
        </GestureHandlerRootView>
  );
};
export default App;
const styles = StyleSheet.create({
  tabIcon: {
    width:RFValue(20) ,
    height:RFValue(20),
  },
});
