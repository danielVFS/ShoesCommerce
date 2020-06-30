import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Black and White</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Black and White</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Black and White</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Black and White</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike Black and White</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
