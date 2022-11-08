import React from 'react';
import {Text, View} from 'react-native';
import ProduitsStylesheet from './Produits.styles';

const Produits = props => {
  return (
    <View style={ProduitsStylesheet.Produits} testID="Produits">
      <Text>produits</Text>
    </View>
  );
};
export default Produits;
