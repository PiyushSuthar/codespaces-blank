import * as React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import ConfigStyles from '../../style.config';
import Cards from '../../components/cards';
import cardData from '../../configs/card.config';
import Footer from '../../components/Footer';

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = React.useState('');

  const CategorySwitch = () => {
    if (activeCategory === 'Google') {
      return <Cards type="Google" navigation={ navigation } cardData={ cardData.google } />;
    } else if (activeCategory === 'Instagram') {
      return <Cards type="Instagram" navigation={ navigation } cardData={ cardData.instagram } />;
    } else {
      return (
        <>
          <Cards type="Instagram" navigation={ navigation } cardData={ cardData.instagram } />
          <Cards type="Google" navigation={ navigation } cardData={ cardData.google } />
        </>
      );
    }
  };
  function categoryChange(name) {
    if (name === "Instagram") {
      setActiveCategory("Instagram");
    } else if (name === "Google") {
      setActiveCategory("Google");
    } else {
      setActiveCategory("");
    }
  }
  return (
    <ScrollView style={ styles.container }>
      {/* <Header /> */}
      <Categories setcategory={ categoryChange } />
      <CategorySwitch />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: ConfigStyles.backgroundColor,
    padding: 8,
    paddingHorizontal: 25,
    paddingBottom: 20
  },
});
