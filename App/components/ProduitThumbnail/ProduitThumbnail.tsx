import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import I_Produit from '../../interfaces/produit';
import ProduitThumbnailStylesheet from './ProduitThumbnail.styles';
// import PropTypes from 'prop-types';
const ProduitThumbnail: React.FC<
  I_Produit & {onProduitPress: Function}
> = props => {
  return (
    <TouchableHighlight
      onPress={evt => {
        props.onProduitPress(props.id);
      }}>
      <View
        style={ProduitThumbnailStylesheet.ProduitThumbnail}
        testID="ProduitThumbnail">
        <View style={ProduitThumbnailStylesheet.ImageContainer}>
          <Image
            style={ProduitThumbnailStylesheet.Image}
            source={{uri: props.image}}
          />
        </View>
        <Text style={ProduitThumbnailStylesheet.Name}>{props.nom}</Text>
      </View>
    </TouchableHighlight>
  );
};
/*ProduitThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  ref: PropTypes.string.isRequired,
};*/
export default ProduitThumbnail;
