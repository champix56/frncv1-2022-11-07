import React from 'react';
import {View} from 'react-native';
import ProduitsScrollContainer from '../ProduitsScrollContainer/ProduitsScrollContainer';
import ProduitsStylesheet from './Produits.styles';
import PropTypes from 'prop-types';
import SearchProduit from '../SearchProduit/SearchProduit';

const Produits = props => {
  return (
    <View style={ProduitsStylesheet.Produits} testID="Produits">
      <SearchProduit />
      <ProduitsScrollContainer />
    </View>
  );
};
// Produits.propTypes = {
//   produits: PropTypes.array.isRequired,
// };
// Produits.defaultProps = {
//   produits: [],
// };
export default Produits;
