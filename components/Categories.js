import * as React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Categories({ setcategory }) {
  const SingleCategory = ({ name, image }) => (
    <TouchableOpacity onPress={()=> setcategory(name)} style={[styles.SingleCategory]}>
      <ImageBackground
        style={styles.SingleCategoryImage}
        imageStyle={{ borderRadius: 8 }}
        source={{ uri: image }}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={{
            height: '100%',
            padding: 10,
            paddingRight: 20,
            paddingLeft: 20,
            borderRadius: 8,
          }}>
          <Text style={{ color: '#fff' }}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
  const categoriesArray = [
    {
      title: 'All',
      image: 'https://source.unsplash.com/random',
    },
    {
      title: 'Instagram',
      image: 'https://source.unsplash.com/200x200/?instagram',
    },
    {
      title: 'Google',
      image: 'https://source.unsplash.com/200x200/?google',
    },
  ];
  return (
    <ScrollView style={styles.categoryContainer} horizontal={true}>
      {categoriesArray.map((data, index) => (
        <SingleCategory key={index} name={data.title} image={data.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SingleCategory: {
    backgroundColor: '#000',
    margin: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  SingleCategoryImage: {
    justifyContent: 'center',
    borderRadius:8,
  },
  categoryContainer: {
    marginLeft: 5,
  },
});
