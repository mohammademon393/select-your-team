import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
    const players = use(playersPromise);
    console.log(players);
    
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>abailble palyers</h1>
    </div>
  );
};

export default AvailablePlayers;