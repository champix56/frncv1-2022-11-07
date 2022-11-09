import React from 'react';
import {View} from 'react-native';
import ProduitsScrollContainer from '../ProduitsScrollContainer/ProduitsScrollContainer';
import ProduitsStylesheet from './Produits.styles';
import PropTypes from 'prop-types';
import SearchProduit from '../SearchProduit/SearchProduit';
import ViewProduit from '../ViewProduit/ViewProduit';
import {useSelector} from 'react-redux';
const Produits = props => {
  return (
    <View style={ProduitsStylesheet.Produits} testID="Produits">
      <SearchProduit />
      <ProduitsScrollContainer />
      {props.current !== undefined && props.current !== null && <ViewProduit />}
    </View>
  );
};

export const UnconnectedProduits = Produits;
export default props => {
  const current = useSelector(s => s.produits.currentProduit);
  return <Produits current={current} />;
};
