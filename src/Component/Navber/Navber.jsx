import logoImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar.png";
import bgImg from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";

const Navber = () => {
  return (
    <div>
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

      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="max-w-[1280px] mx-auto rounded-2xl bg-black bg-center h-[400px] flex flex-col items-center justify-center text-white"
      >
        <img className="w-100%" src={banner} alt="" />
        <h1 className="text-[40px] font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p>Beyond Boundaries Beyond Limits</p>

        <button className="btn mt-2 text-black bg-[#e7fe29]">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Navber;
