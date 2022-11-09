import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import SearchProduitStylesheet from './SearchProduit.styles';

const SearchProduit = props => {
  const [searchStr, setsearchStr] = useState('');
  return (
    <View style={SearchProduitStylesheet.SearchProduit} testID="SearchProduit">
      <TextInput
        placeholder="recherche"
        value={searchStr}
        onChangeText={value => {
          setsearchStr(value);
        }}
      />
    </View>
  );
};
export default SearchProduit;
