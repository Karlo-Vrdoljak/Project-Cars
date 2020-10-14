import * as React from 'react';
import { Text, View, Button, OpaqueColorValue } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme } from '@react-navigation/native';
import { Svg } from 'expo';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    // ...DarkTheme.colors,
    primary: '#2196f3',
    background: '#212121',
    card: '#333333',
    text: '#f5f5f5',
    border: '#424242',
    notification: '#304ffe',
  },
};

// colors: {
//     primary: 'rgb(255, 45, 85)',
//   },

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'#fff'}}>asdf!</Text>
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  const HomeStack = createStackNavigator();
  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    );
  }
  
  const SettingsStack = createStackNavigator();
  
  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
      </SettingsStack.Navigator>
    );
  }
  
  const Tab = createBottomTabNavigator();
//    safeAreaInsets: {bottom:30}, 
  export default function Navigation() {
    return (
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator tabBarOptions={{adaptive: true, style:{paddingBottom:15}  }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }


