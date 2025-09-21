import logoImg from '../../assets/logo.png';
import coinImg from '../../assets/dollar.png';

const Navber = () => {
    return (
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div className="flex gap-2 btn justify-items-center">
          <span>65000000</span>
          <span className="flex gap-1">
            <p>Coin</p>
            <img className="w-5 h-5" src={coinImg} alt="" />
          </span>
        </div>
      </div>
    );
};

export default Navber;