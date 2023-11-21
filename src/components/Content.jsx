import React from 'react';
import styled from 'styled-components';
import ScrollIndicator from './ScrollIndicator';

const Content = () => {
  const sections = ['section1', 'section2', 'section3', 'section4'];
  return (
    <div className="app-content">
      <div>
        {sections.map((sectionId, index) => (
          <Section id={sectionId} key={index}>
            {`Section ${index + 1}`}
          </Section>
        ))}
        <ScrollIndicator sections={sections} />
      </div>
      <div className="footer-order">
        <button type="button">Order</button>
        <span>Starting at $699</span>
      </div>
    </div>
  );
};

export default Content;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
