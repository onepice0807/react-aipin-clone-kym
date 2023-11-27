import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';
import './index.css';
import ShopPage from './shop/ShopPage';
import GiftsPage from './GiftsPage';
import BrowsePage from './BrowsePage';

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
  const [selectedBanner, setSelectedBanner] = useState('Quest');

  const handleBannerClick = (banner) => {
    setSelectedBanner(banner);
    if (banner === 'Quest') {
      navigate('/shop');
    } else {
      navigate(`/shop/${banner.toLowerCase()}`);
    }
  };

  let ContentComponent;
  switch (selectedBanner) {
    case '탐색':
      ContentComponent = ShopPage;
      break;
    case '찾아보기':
      ContentComponent = BrowsePage;
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
          title="탐색"
          isSelected={selectedBanner === 'Quest'}
          onClick={() => handleBannerClick('Quest')}
        />
        <Banner
          title="찾아보기"
          isSelected={selectedBanner === 'Browse'}
          onClick={() => handleBannerClick('Browse')}
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
