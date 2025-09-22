import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
    const players = use(playersPromise);
    console.log(players[2].img);
    
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>abailble palyers</h1>

      {/* card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="p-5">
          <img src={players[2].img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;