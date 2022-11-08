import React from 'react';
import {Text, View} from 'react-native';
import ProduitsScrollContainer from '../ProduitsScrollContainer/ProduitsScrollContainer';
import ProduitsStylesheet from './Produits.styles';
import PropTypes from 'prop-types';

const Produits = props => {
  return (
    <View style={ProduitsStylesheet.Produits} testID="Produits">
      <ProduitsScrollContainer produits={props.produits} />
    </View>
  );
};
Produits.propTypes = {
  produits: PropTypes.array.isRequired,
};
export default Produits;
