import {createSlice} from '@reduxjs/toolkit';
import {produits} from '../../db.json';
export const initialState = {
  produits: produits,
  currentProduit: null,
};

const produitSlice = createSlice({
  name: 'produits',
  initialState,
  reducers: {
    addProduit: (state, produit) => {
      state.produits.push(produit);
    },
    addProduits: (state, produits) => {
      state.produits = produits;
    },
    selectCurrent: (state, id) => {
      state.currentProduit = state.produits.find(e => e.id === id);
    },
  },
});

export const {addProduit, addProduits, selectCurrent} = produitSlice.actions;

export default produitSlice.reducer;
