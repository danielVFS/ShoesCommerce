import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { FaShoePrints } from 'react-icons/fa';
import { Container, Logo, Cart } from './styles';

function Header() {
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
          <span>3 item</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
