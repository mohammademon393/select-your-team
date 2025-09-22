import manImg from "../../assets/icons8-man-50.png";
import flagImg from "../../assets/icons8-flag-50.png";
import { useState } from "react";

const PlayerCard = ({
  player,
  setAvailableValance,
  availableValance,
  setChoosePlayers,
  choosePlayers }) => {
  const [isSelected, setIsSelected] = useState(false);


  const handleValance = (playerData) => {
    const playerPrice = playerData.price
      .split("$")
      .join("")
      .split(",")
      .join("");
    if (availableValance < playerPrice) {
      alert("Not enogth money");
    }
    setIsSelected(true), setAvailableValance(availableValance - playerPrice);

    setChoosePlayers([...choosePlayers, playerData]);
  };



  return (
    <div className="card bg-base-100 w-[410px] shadow-sm mb-2">
      <figure className="px-5 pt-5">
        <img
          src={player.img}
          alt="Shoes"
          className="rounded-xl h-[240px] w-[400px]"
        />
      </figure>

      <div className="card-body ">
        <div className="flex gap-2">
          <img className="w-[25px]" src={manImg} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>

        <div className="flex justify-between">
          <span className="flex gap-2 items-center ">
            <img className="w-[20px] mt-2" src={flagImg} alt="" />
            <p className="text-[#131313]">{player.country}</p>
          </span>
          <span className="btn">{player.playing_role}</span>
        </div>

        <h3 className="font-semibold text-[16px]">{player.rating}</h3>

        <div className="flex gap-2 justify-between">
          <span>
            <h3 className="font-semibold text-[16px]">
              {player.batting_style}
            </h3>
          </span>
          <span>
            <p className="text-[16px] text-[rgba(19, 19, 19, 0.67)]">
              {player.bowling_style}
            </p>
          </span>
        </div>

        <div className="card-actions justify-between items-center">
          <div className="font-bold text-[16px]">{player.price}</div>
          <div>
            <button
              disabled={isSelected}
              onClick={() => {
                handleValance(player);
              }}
              className="btn font-bold bg-[#e7fe29]"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
