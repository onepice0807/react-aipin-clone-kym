import React from 'react';
import { PRODUCTS } from '../../../data/Product';
import Item from './Item';
import styled from 'styled-components';

const ShopPage = () => {
  return (
    <Container>
      {PRODUCTS.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ShopPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
