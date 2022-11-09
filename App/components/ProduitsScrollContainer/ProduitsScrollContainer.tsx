import React from 'react';
import {ScrollView, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import {connect, useSelector, useDispatch} from 'react-redux';
import ProduitThumbnail from '../ProduitThumbnail/ProduitThumbnail';
import ProduitsScrollContainerStylesheet from './ProduitsScrollContainer.styles';
import {selectCurrent} from '../../store/produits.reducer';

interface I_ProduitsScrollContainerProps {
  produits: Array<I_Produit>;
  onPressProduit: Function;
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
/*logique avec map state et map dispatch*/
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
export const storeMappedProduitsScrollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProduitsScrollContainer);

export const unconnectedProduitScrollContainer = ProduitsScrollContainer;

/*nouvelle aproche react-redux*/
export default (props: any) => {
  const produits = useSelector((state: any) => state.produits.produits);
  const dispatch = useDispatch();
  return (
    <ProduitsScrollContainer
      {...props}
      produits={produits}
      onPressProduit={(id: number) => dispatch(selectCurrent(id))}
    />
  );
};
