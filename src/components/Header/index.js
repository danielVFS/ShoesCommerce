import React from 'react';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { FaShoePrints } from 'react-icons/fa';
import { Container, Logo, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Logo to="/" style={{ textDecoration: 'none' }}>
        <div>
          <text>Shoes</text>
        </div>
        <FaShoePrints size={40} color="#FFF" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
