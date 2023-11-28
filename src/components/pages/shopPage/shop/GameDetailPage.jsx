import React from 'react';
import { useParams } from 'react-router-dom';
import { GAMES } from '../../../data/Game';

const GameDetailPage = () => {
  const { gameId } = useParams();
  const game = GAMES.find((g) => g.id.toString() === gameId); // `gameId`와 일치하는 게임 찾기

  if (!game) {
    // 게임이 없을 경우의 처리
    return <div>해당 게임을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
    </div>
  );
};

export default GameDetailPage;
