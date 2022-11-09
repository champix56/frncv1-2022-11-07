import React from 'react';
import {Text, View} from 'react-native';
import ViewProduitStylesheet from './ViewProduit.styles';

const ViewProduit = props => {
  return (
    <View style={ViewProduitStylesheet.ViewProduit} testID="ViewProduit">
      <Text>viewProduit</Text>
    </View>
  );
};
export default ViewProduit;
