import React from 'react';
import {Image, Text, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import ProduitThumbnailStylesheet from './ProduitThumbnail.styles';
import PropTypes from 'prop-types';
const ProduitThumbnail: React.FC<I_Produit> = props => {
  return (
    <View
      style={ProduitThumbnailStylesheet.ProduitThumbnail}
      testID="ProduitThumbnail">
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image style={{height: 50, width: 50}} source={{uri: props.image}} />
      </View>
      <Text style={{textAlign: 'center'}}>{props.nom}</Text>
    </View>
  );
};
/*ProduitThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  ref: PropTypes.string.isRequired,
};*/
export default ProduitThumbnail;
