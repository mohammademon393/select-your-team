import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber/Navber";
import SelectPlayers from "./Component/SelectedPlayers/SelectPlayers";

const playersPromise = fetch("./Players.json").then((res) => res.json());

function App() {

  const [toggle, setToggle] = useState(true);


  return (
    <>
      <div>
        <Navber></Navber>

        <div className="flex justify-end items-center  max-w-[1280px] mx-auto mt-8 mb-5">
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
              Selected <span>(0)</span>
            </button>
          </div>
        </div>

        {toggle === true ? (
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        ) : (
          <SelectPlayers></SelectPlayers>
        )}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
