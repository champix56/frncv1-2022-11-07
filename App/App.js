import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';
import Button from './components/Button/Button';
import ButtonClass from './components/ButtonClass/ButtonClass';
import Produits from './components/Produits/Produits';
import Splash from './components/Splash/Splash';
import {produits} from '../db.json'
function App(props) {
  const [screen, setscreen] = useState(null);
  
  useEffect(() => {
    if (screen === null) {
      setscreen(<Splash />);
      setTimeout(() => {
        setscreen(<Produits produits={produits} />);
      }, 5000);
    }
  }, []);
  return screen;
}
export default App;
