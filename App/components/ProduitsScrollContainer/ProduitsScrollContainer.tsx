import React from 'react';
import {ScrollView, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import ProduitThumbnail from '../ProduitThumbnail/ProduitThumbnail';
import ProduitsScrollContainerStylesheet from './ProduitsScrollContainer.styles';

interface I_ProduitsScrollContainerProps {
  produits: Array<I_Produit>;
}
const ProduitsScrollContainer: React.FunctionComponent<
  I_ProduitsScrollContainerProps
> = props => {
  return (
    <ScrollView
      style={ProduitsScrollContainerStylesheet.ProduitsScrollContainer}>
      <View style={ProduitsScrollContainerStylesheet.mainView}>
        {props.produits.map((e, i) => (
          <ProduitThumbnail key={`produit${i}`} {...e} />
        ))}
      </View>
    </ScrollView>
  );
};
export default ProduitsScrollContainer;
