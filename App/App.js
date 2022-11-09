import React, {useEffect, useState} from 'react';
import Produits from './components/Produits/Produits';
import Splash from './components/Splash/Splash';
import {store} from './store/store';
import {Provider} from 'react-redux';
function App(props) {
  console.log(store);
  const [screen, setscreen] = useState(null);
  // const [produits, setproduits] = useState([]);
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
    setscreen(<Produits />);
  }, []);
  // useEffect(() => {
  //   if (produits.length > 0) setscreen(<Produits produits={produits} />);
  // }, [produits]);

  return screen;
}

export default props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};
