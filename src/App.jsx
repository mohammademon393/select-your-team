import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber/Navber";
import SelectPlayers from "./Component/SelectedPlayers/SelectPlayers";

const playersPromise = fetch("./Players.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <Navber></Navber>

        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>

        {/* <SelectPlayers></SelectPlayers> */}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
