import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableValance,
  availableValance,
  setChoosePlayers,
  choosePlayers
}) => {
  const players = use(playersPromise);
  //   console.log(players);

  return (
    <div className="max-w-[1280px] mx-auto mt-[-60px]">
      {/* <h1 className="font-bold text-2xl">Availebale Players</h1> */}

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            choosePlayers={choosePlayers}
            setChoosePlayers={setChoosePlayers}
            availableValance={availableValance}
            setAvailableValance={setAvailableValance}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
