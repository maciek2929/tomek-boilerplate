import React, { FC, useState, useEffect } from 'react';
import logo from './logo.svg';
import './index.scss';
import Item from '../Item';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/actions';
import { Product } from '../../redux/product/types';

const products = [{ name: "Tv" }, { name: "Iphone" }, { name: "Kettle" }];

const App: FC = (): JSX.Element => {
  const [items, addItem] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(items, 'item');
  }, [items])

  const handleAddItem = (item: string): void => {
    addItem([...items, item]);
    // Redux dispatcher event
    dispatch(addToCart({ name: item }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Workshops React, Redux, TS - Maciej Opozda</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {products.map(({ name }: Product) => <Item addItem={handleAddItem} name={name} key={`id-${name}`} />)}
        </ul>
      </header>
    </div>
  );
}

export default App;
