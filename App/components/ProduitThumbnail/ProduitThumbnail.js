import React from 'react';
import {Text, View} from 'react-native';
import ProduitThumbnailStylesheet from './ProduitThumbnail.styles';

const ProduitThumbnail = props => {
  return (
    <View style={ProduitThumbnailStylesheet.ProduitThumbnail} testID="ProduitThumbnail">
      <Text>produitThumbnail</Text>
    </View>
  );
};
export default ProduitThumbnail;
