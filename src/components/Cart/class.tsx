import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product } from '../../redux/product/types';
import { StoreState } from '../../redux/store';
import Item from '../Item';

type CartProps = {
  items: Product[];
}

class Cart extends Component<CartProps, {}> {

  constructor(props: CartProps) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Shop cart:</h2>
          <ul>
            {this.props.items.map((item: Product) => <Item name={item.name} key={`id-${item.name}`} />)}
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }: StoreState) => ({ items: cart.items })

export default connect(
  mapStateToProps,
)(Cart)
