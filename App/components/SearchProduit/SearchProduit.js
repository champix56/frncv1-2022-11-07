import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {filterProduits} from '../../store/produits.reducer';
import SearchProduitStylesheet from './SearchProduit.styles';
import {useDispatch} from 'react-redux';
const SearchProduit = props => {
  return (
    <View style={SearchProduitStylesheet.SearchProduit} testID="SearchProduit">
      <TextInput
        placeholder="recherche"
        onChangeText={value => {
          props.onSearch(value);
        }}
      />
    </View>
  );
};

export const UnconncetedSearchProduit = SearchProduit;
export default props => {
  const d = useDispatch();
  return <SearchProduit onSearch={str => d(filterProduits(str))} />;
};
