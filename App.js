import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './components/Header';
import { Text, View } from 'react-native';
import HomeScreen from './screens/Home'
import YTMusicDownloader from './screens/YouTube/Music'

const Stack = createStackNavigator()

function TestScreen() {
  return (
    <View>
      <Text>Hello Test</Text>
    </View>
  )
}

function Navigator() {
  return (
    <NavigationContainer theme={ {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: "#181717",
      },
    } }>
      <Stack.Navigator headerMode="screen" screenOptions={ {
        header: props => <Header { ...props } />,
      } }>
        <Stack.Screen name="home" component={ HomeScreen } />
        <Stack.Screen name="test" component={ TestScreen } />
        <Stack.Screen name="YouTubeMusicDownloader" component={ YTMusicDownloader } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <View style={ { backgroundColor: "#181717", flex: 1 } }>
      <Navigator />
    </View>
  );
}