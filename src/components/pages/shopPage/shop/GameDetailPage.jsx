import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { GAMES } from '../../../data/Game';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
const GameDetailPage = () => {
  const { gameId } = useParams();
  const gameDetail = GAMES.find((game) => game.id.toString() === gameId);

  if (!gameDetail) {
    return <div>해당 게임을 찾을 수 없습니다!!!</div>;
  }

  return (
    <Container>
      <DetailMain>
        <NavigationBarTop>
          <button
            onClick={() => {
              /* 탐색 관련 함수 넣을공간 */
            }}
          >
            탐색
          </button>
          <button
            onClick={() => {
              /* 찾아보기 관련 함수 넣을공간 */
            }}
          >
            찾아보기
          </button>
          <button
            onClick={() => {
              /* 새소식 관련 함수 넣을공간 */
            }}
          >
            새소식
          </button>
          <input type="text" placeholder="검색..." />
        </NavigationBarTop>
        <h1>{gameDetail.name}</h1>
        <Carousel>
          {gameDetail.imageUrl.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </DetailMain>
      <DetailSide>
        <NavigationBar>
          <button
            onClick={() => {
              /* 구매 관련 함수 넣을공간 */
            }}
          >
            지금 구매
          </button>
          <button
            onClick={() => {
              /* 장바구니 관련 함수 넣을공간 */
            }}
          >
            장바구니에 담기
          </button>
          <button
            onClick={() => {
              /* 위시리스트 관련 함수 넣을공간 */
            }}
          >
            위시리스트에 추가
          </button>
        </NavigationBar>
      </DetailSide>
    </Container>
  );
};

export default GameDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  margin-bottom: 100px;
`;

const NavigationBarTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  & > button {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
  & > input {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  & > button {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
  & > input {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
`;

const DetailMain = styled.div`
  width: 50%;
  margin: auto;
`;

const DetailSide = styled.div`
  top: auto;
  display: flex;
  padding-right: 100px;
  padding-bottom: 1100px;
`;
