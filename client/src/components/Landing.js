import React from 'react';
import Light from './Light';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Control Raspberry Pi GPIO Pins</h3>
      Here will go various buttons for each active pin.
      <Light />
    </div>
  );
};

export default Landing;
