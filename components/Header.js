import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';

export default function Header({ previous, navigation }) {
  return (

    <View style={ [styles.container, { paddingHorizontal: previous ? 10 : 40, }] }>
       <StatusBar style="light" />
      {previous ? (
        <HeaderBackButton onPress={ navigation.goBack } tintColor="#fff" />
      ) : undefined }
      <View>
        <Text style={ styles.heading }>Toolzar</Text>
        <Text style={ styles.subHeading }>All the tools you need</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor: "#181717"
  },
  heading: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'normal',
  },
});
