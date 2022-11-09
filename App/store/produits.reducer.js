import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {produits} from '../../db.json';
/*export interface I_ProduitsState{
    fullListProduits:Array<I_Produit>;
    produits:Array<I_Produit>;
    currentProduit:I_Produit;
    loading: "idle" | "pending" | "succeeded" | "failed";
}*/
export const initialState = {
  fullListProduits: [],
  produits: [],
  currentProduit: null,
  loading: 'idle',
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
    filterProduits: (s, str) => {
      s.produits = s.fullListProduits.filterProduits(e => e.nom.includes(str));
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProduits.fulfilled, (state, payload) => {
      state.fullListProduits = payload.payload;
      state.produits = state.fullListProduits;
      state.loading = 'succeeded';
    });
    builder.addMatcher(
      action =>
        action.type.includes('produits/fetch/') &&
        !action.type.includes('fulfilled'),
      (state, payload) => {
        console.log(payload);
        state.produits = [];
        state.fullListProduits = [];
      },
    );
  },
});

export const fetchProduits = createAsyncThunk('produits/fetch', async () => {
  console.log('%c%s', 'color:red', 'fetch start');
  const result = await fetch(
    'https://my-json-server.typicode.com/champix56/frncv1-2022-11-07/produits',
  );
  const response = await result.json();
  console.log(response);
  return response;
});
export const {addProduit, addProduits, selectCurrent} = produitSlice.actions;

export default produitSlice.reducer;
