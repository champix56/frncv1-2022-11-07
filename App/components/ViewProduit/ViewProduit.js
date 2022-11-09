import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearSelection, selectCurrent} from '../../store/produits.reducer';
import ViewProduitStylesheet from './ViewProduit.styles';

const ViewProduit = props => {
  return (
    <View
      style={{...ViewProduitStylesheet.ViewProduit, flexDirection: 'row'}}
      testID="ViewProduit">
      <View
        style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          {props.produit.nom}
        </Text>
        <Image
          source={{uri: props.produit.image}}
          style={{width: 100, height: 100}}
        />
        <Text style={{textAlign: 'center', fontSize: 15}}>
          {props.produit.prix}€
        </Text>
      </View>
      <View>
        <Button title="add" />
        <Button title="remove" />
        <Button title="close" onPress={props.onClosePress} />
      </View>
    </View>
  );
};
export const UnconnectedViewProduit = ViewProduit;
export default props => {
  const p = useSelector(s => s.produits.currentProduit);
  const d = useDispatch();
  return (
    <ViewProduit
      produit={p}
      onClosePress={() => {
        d(clearSelection());
      }}
    />
  );
};
