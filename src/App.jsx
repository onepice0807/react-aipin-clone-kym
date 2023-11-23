import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import AiPinPage from './components/AiPinPage';
import Footer from './components/Footer';
import Header from './components/Header';
import AccessoriesPage from './components/pages/shopPage/AccessoriesPage';
import GiftsPage from './components/pages/shopPage/GiftsPage';
import Shop from './components/pages/shopPage/index';
import MainPage from './components/pages/mainPage/MainPage';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
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
            {/* Shop 관련 경로를 여기에 중첩합니다. */}
            <Route path="shop" element={<Shop />}>
              <Route index element={<div>Welcome to the shop!</div>} />
              <Route path="accessories" element={<AccessoriesPage />} />
              <Route path="gifts" element={<GiftsPage />} />
            </Route>
            {/* 다른 경로들을 추가할 수 있습니다. */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
