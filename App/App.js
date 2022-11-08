import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';
import Button from './components/Button/Button';
import ButtonClass from './components/ButtonClass/ButtonClass';
import Produits from './components/Produits/Produits';
import Splash from './components/Splash/Splash';

function App(props) {
  const [screen, setscreen] = useState(null);
  const [produits, setproduits] = useState([]);
  useEffect(() => {
    //const pr1 =
    fetch(
      'https://my-json-server.typicode.com/champix56/frncv1-2022-11-07/produits',
    )
      .then(f => f.json())
      .then(a => {
        setproduits(a);
        console.log(a);
      });
    //const pr2 = new Promise(() => setTimeout(() => {}), 2000);
    //Promise.race([pr1,pr2]).then()

    setscreen(<Splash />);
  }, []);
  useEffect(() => {
    if (produits.length > 0) setscreen(<Produits produits={produits} />);
  }, [produits]);

  return screen;
}
export default App;
