import React from 'react';

const SelectedCard = ({ select, removePlayers }) => {
  return (
    <div className="border-2 mb-4 border-gray-300 flex justify-between rounded-xl items-center max-w-[1280px] mx-auto">
      <div className="flex gap-4 items-center">
        <img
          className="w-[60px] h-[60px] m-2 rounded-xl"
          src={select.img}
          alt=""
        />
        <div>
          <h2 className="font-bold">{select.name}</h2>
          <p className="font-400 text-sm">{select.playing_role}</p>
        </div>
      </div>
      <div onClick={() => removePlayers(select)}>
        <img
          className="w-[25px] mr-5 cursor-pointer"
          src="https://i.ibb.co/wrFvDyLq/delete.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SelectedCard;