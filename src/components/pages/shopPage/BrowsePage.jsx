import React from 'react';
import styled from 'styled-components';
import GameDetail from './shop/GameDetail';

const BrowsePage = () => {
  return (
    <BrowseWrapper>
      <GameDetail />
    </BrowseWrapper>
  );
};

export default BrowsePage;

const BrowseWrapper = styled.div``;
