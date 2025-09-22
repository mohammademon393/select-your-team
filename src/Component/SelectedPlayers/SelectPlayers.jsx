import React from "react";
import SelectedCard from "./SelectedCard";

const SelectPlayers = ({ choosePlayers }) => {
  // console.log(choosePlayers);

  return (
    <div className="max-w-[1280px] mx-auto mt-[-65px]">
      {/* <h1 className="text-2xl font-bold">Slected players</h1> */}

      <div className="mt-8">
        {choosePlayers.map((select) => (
          <SelectedCard key={select.id} select={select}></SelectedCard>
        ))}
      </div>
    </div>
  );
};

export default SelectPlayers;
