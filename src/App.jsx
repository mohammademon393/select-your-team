import "./App.css";
import Navber from "./Component/Navber/Navber";

const playersPromise = fetch("./Players.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <Navber></Navber>
      </div>
    </>
  );
}

export default App;
