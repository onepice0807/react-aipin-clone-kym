import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <div className="footer-order">
          <button type="button">Order</button>
          <span>Starting at $699</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
