import React, {useEffect, useState} from 'react';
import Produits from './components/Produits/Produits';
import Splash from './components/Splash/Splash';
import {store} from './store/store';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {fetchProduits} from './store/produits.reducer';
import {Text, View} from 'react-native';
function App(props) {
  console.log(store);
  const [screen, setscreen] = useState(null);
  // const [produits, setproduits] = useState([]);
  const dispatch=useDispatch();
  const isLoading = useSelector(state => state.produits.loading);
  useEffect(() => {
    if (isLoading === 'succeeded') {
      setscreen(<Produits />);
    }
    if (isLoading === 'failed') {
      setscreen(
        <View>
          <Text>Error loading datas</Text>
        </View>,
      );
    }
  }, [isLoading]);
  useEffect(() => {
    //const pr1 =
    // fetch(
    //   'https://my-json-server.typicode.com/champix56/frncv1-2022-11-07/produits',
    // )
    //   .then(f => f.json())
    //   .then(a => {
    //     setproduits(a);
    //     console.log(a);
    //   });
    //const pr2 = new Promise(() => setTimeout(() => {}), 2000);
    //Promise.race([pr1,pr2]).then()

    //setscreen(<Splash />);
    setscreen(<Splash />);
    dispatch(fetchProduits());
  }, []);

  return screen;
}

export default props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};
