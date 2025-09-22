import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber/Navber";
import SelectPlayers from "./Component/SelectedPlayers/SelectPlayers";
import { ToastContainer } from "react-toastify";

const playersPromise = fetch("./Players.json").then((res) => res.json());

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableValance, setAvailableValance] = useState(12000000);
  const [choosePlayers, setChoosePlayers] = useState([]);

  // console.log(choosePlayers);

  const removePlayers =(p)=>{
    const filteredData = choosePlayers.filter(ply => ply.id !== p.id);
    setChoosePlayers(filteredData);
    setAvailableValance(availableValance + parseInt(p.price.split("$")
      .join("")
      .split(",")
      .join("")))
    
  }
  

  return (
    <>
      <div>
        <Navber availableValance={availableValance}></Navber>

        <div className="flex justify-between items-center  max-w-[1280px] mx-auto mt-8 mb-[80px]">
          <h1 className="font-bold text-2xl">
            {toggle === true
              ? "Available Players"
              : `Selected Players ${choosePlayers.length}/6`}
          </h1>
          <div className=" font-bold flex">
            <button
              onClick={() => setToggle(true)}
              className={`cursor-pointer py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${
                toggle === true ? "bg-[#e7fe29]" : ""
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`cursor-pointer py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${
                toggle === false ? "bg-[#e7fe29]" : ""
              }`}
            >
              Selected <span>({choosePlayers.length}/6)</span>
            </button>
          </div>
        </div>

        {toggle === true ? (
          <AvailablePlayers
            setChoosePlayers={setChoosePlayers}
            choosePlayers={choosePlayers}
            availableValance={availableValance}
            setAvailableValance={setAvailableValance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        ) : (
          <SelectPlayers
            removePlayers={removePlayers}
            choosePlayers={choosePlayers}
          ></SelectPlayers>
        )}

        <Footer></Footer>

        <ToastContainer position="top-right"></ToastContainer>
      </div>
    </>
  );
}

export default App;
