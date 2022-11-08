import React from 'react';
import {Image, Text, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import ProduitThumbnailStylesheet from './ProduitThumbnail.styles';

const ProduitThumbnail: React.FC<I_Produit> = props => {
  return (
    <View
      style={ProduitThumbnailStylesheet.ProduitThumbnail}
      testID="ProduitThumbnail">
      <View>
        <Image source={{uri: props.image}} />
      </View>
      <Text>{props.nom}</Text>
    </View>
  );
};
export default ProduitThumbnail;
