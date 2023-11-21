import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

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
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="main" element={<Content />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
