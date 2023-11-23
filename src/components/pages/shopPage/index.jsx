import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';
import './index.css';
import ShopPage from './ShopPage';
import AccessoriesPage from './AccessoriesPage';
import GiftsPage from './GiftsPage';

WebFont.load({
  google: {
    families: ['Roboto:400,700'],
  },
});

const Banner = ({ title, isSelected, onClick }) => {
  return (
    <div className={`banner ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {title}
    </div>
  );
};

const Shop = () => {
  const navigate = useNavigate();
  const [selectedBanner, setSelectedBanner] = useState('Ai Pin');

  const handleBannerClick = (banner) => {
    setSelectedBanner(banner);
    if (banner === 'Ai Pin') {
      navigate('/shop');
    } else {
      navigate(`/shop/${banner.toLowerCase()}`);
    }
  };

  let ContentComponent;
  switch (selectedBanner) {
    case 'Ai Pin':
      ContentComponent = ShopPage;
      break;
    case 'Accessories':
      ContentComponent = AccessoriesPage;
      break;
    case 'Gifts':
      ContentComponent = GiftsPage;
      break;
    default:
      ContentComponent = ShopPage;
  }

  return (
    <>
      <div className="banners-container">
        <Banner
          title="Ai Pin"
          isSelected={selectedBanner === 'Ai Pin'}
          onClick={() => handleBannerClick('Ai Pin')}
        />
        <Banner
          title="Accessories"
          isSelected={selectedBanner === 'Accessories'}
          onClick={() => handleBannerClick('Accessories')}
        />
        <Banner
          title="Gifts"
          isSelected={selectedBanner === 'Gifts'}
          onClick={() => handleBannerClick('Gifts')}
        />
      </div>
      <ContentComponent />
    </>
  );
};

export default Shop;
