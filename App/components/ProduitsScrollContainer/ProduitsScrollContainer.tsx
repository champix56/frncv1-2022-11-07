import React from 'react';
import {ScrollView, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import {connect} from 'react-redux';
import ProduitThumbnail from '../ProduitThumbnail/ProduitThumbnail';
import ProduitsScrollContainerStylesheet from './ProduitsScrollContainer.styles';
import {selectCurrent} from '../../store/produits.reducer';

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
//I_ProduitsScrollContainerOwnProps
// {produits:{produits:[],currentProduits:{}}}
function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    produits: state.produits.produits,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    onPressProduit: (id: number) => dispatch(selectCurrent(id)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProduitsScrollContainer);

export const unconnectedProduitScrollContainer = ProduitsScrollContainer;
