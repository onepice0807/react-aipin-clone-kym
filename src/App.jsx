import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import TechDetailsPage from './components/pages/AiPinPage/TechDetailsPage';
import BrowsePage from './components/pages/shopPage/BrowsePage';
import TrustPage from './components/pages/AiPinPage/TrustPage';
import AiPinPage from './components/pages/AiPinPage/AiPinPage';
import GiftsPage from './components/pages/shopPage/GiftsPage';
import MainPage from './components/pages/mainPage/MainPage';
import Shop from './components/pages/shopPage/index';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import './App.css';
import GameDetailPage from './components/pages/shopPage/shop/GameDetailPage';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 모든 주소에 Layout 컴포넌트를 적용합니다. */}
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="aipin" element={<AiPinPage />} />
            <Route path="aipin/trust" element={<TrustPage />} />
            <Route path="aipin/tech-details" element={<TechDetailsPage />} />
            {/* Shop 관련 경로를 여기에 중첩합니다. */}
            <Route path="shop" element={<Shop />}>
              <Route index element={<div>Welcome to the shop!</div>} />
              <Route path="browse" element={<BrowsePage />} />
              <Route path="gifts" element={<GiftsPage />} />
            </Route>
            <Route path="/shop/detail/:gameId" element={<GameDetailPage />} />
            {/* 다른 경로들 예정 */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
