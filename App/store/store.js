import {configureStore, combineReducers} from '@reduxjs/toolkit';
import produitReducer from './produits.reducer';
export const store = configureStore({
  reducer: combineReducers({produits: produitReducer}),
});
/*  produits:
        produits,currentProduit
*/
