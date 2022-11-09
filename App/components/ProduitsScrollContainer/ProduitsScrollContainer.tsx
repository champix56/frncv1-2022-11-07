import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import {store} from '../../store/store';
import ProduitThumbnail from '../ProduitThumbnail/ProduitThumbnail';
import ProduitsScrollContainerStylesheet from './ProduitsScrollContainer.styles';

interface I_ProduitsScrollContainerProps {
  produits: Array<I_Produit>;
}
const initialProduits: Array<I_Produit> = [];
const ProduitsScrollContainer: React.FunctionComponent<
  I_ProduitsScrollContainerProps
> = props => {
  //connexion "old school d'un cmp"
  const [produits, setproduits] = useState(initialProduits);
  useEffect(() => {
    store.subscribe(() => {
      setproduits(store.getState().produits.produits);
    });
  }, []);

  return (
    <ScrollView
      style={ProduitsScrollContainerStylesheet.ProduitsScrollContainer}>
      <View style={ProduitsScrollContainerStylesheet.mainView}>
        {produits.map((e, i) => (
          <ProduitThumbnail key={`produit${i}`} {...e} />
        ))}
      </View>
    </ScrollView>
  );
};
export default ProduitsScrollContainer;
