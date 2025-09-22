import logoImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar.png";
import bgImg from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";

const Navber = () => {
  return (
    <div>
      <div className="navbar justify-between max-w-[1280px] mx-auto">
        <div className="">
          <a className="text-xl">
            <img className="w-[60px]" src={logoImg} alt="" />
          </a>
        </div>
        <div className="flex list-none gap-4 font-semibold">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedule</li>
        </div>
        <div className="flex gap-2 btn items-center">
          <span>65000000</span>
          <span className="flex gap-1">
            <p>Coin</p>
            <img className="w-5 h-5" src={coinImg} alt="" />
          </span>
        </div>
      </div>


        {/* banner design */}
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="max-w-[1280px] mx-auto rounded-2xl bg-black bg-center h-[400px] flex flex-col items-center justify-center text-white mt-4"
      >
        <img src={banner} alt="" />
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
