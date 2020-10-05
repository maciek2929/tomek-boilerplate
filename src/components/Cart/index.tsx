import React, { FC } from 'react';
import './index.scss';
import Item from '../Item';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import { Product } from '../../redux/product/types';

const Cart: FC = (): JSX.Element => {
  // TODO: use selectors (reselect)
  // https://github.com/reduxjs/reselect
  const items = useSelector<StoreState, Product[]>(({ cart }) => cart.items);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Shop cart:</h2>
        <ul>
          {items.map((item: Product) => <Item name={item.name} key={`id-${item.name}`} />)}
        </ul>
      </header>
    </div>
  );
}

export default Cart;
