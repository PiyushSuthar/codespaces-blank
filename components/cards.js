import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import configStyles from '../style.config';

export default function Cards({ type = "Instagram", cardData = [], navigation }) {

  const SingleCard = ({ name, category, to }) => (
    <TouchableOpacity onPress={ () => navigation.navigate(to || "test") } style={ styles.card_container }>
      <Text style={ styles.subheading }>{ category }</Text>
      <Text style={ styles.heading }>{ name }</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Text style={ styles.title }>{ type }</Text>
      {cardData.map((value, index) => {
        return <SingleCard key={ index } name={ value.Name } to={ value.path } category={ value.category } />;
      }) }
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: configStyles.text.sub,
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 5,
    marginTop: 5,
    fontSize: 17
  },
  card_container: {
    backgroundColor: configStyles.cards.backgroundColor,
    borderRadius: 16,
    padding: 20,
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6
  },
  heading: {
    color: configStyles.text.main,
    fontWeight: 'bold',
    fontSize: 17,
  },
  subheading: {
    color: configStyles.text.sub,
    fontSize: 12
  },
});
