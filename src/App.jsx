
import './App.css';
import logoImg from './assets/logo.png';
import coinImg from './assets/dollar.png';

function App() {

  return (
    <>
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div className="flex gap-2 btn justify-items-center">
          <span>65000000</span>
          <span className='flex gap-1'>
            <p>Coin</p> 
            <img className='w-6 h-6' src={coinImg} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default App
