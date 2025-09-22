import React from 'react';
import footerLogo from '../../assets/logo-footer.png';
import bgimg from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
      <div className="bg-black p-10 text-white mt-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-center">
            <img src={footerLogo} alt="" />
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <h3 className="font-bold">About Us</h3>
              <p>
                We are passionate team <br />
                dedicated to providing the best <br /> services to our customers
              </p>
            </div>
            <div>
              <h3 className="font-bold">Quick Links</h3>
              <ul className="text-white">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Subcribe</h3>
              <p>
                Sebcribe to our newsletter for the <br /> latest updates.
              </p>

              <div>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name=""
                  id=""
                />
                <span>
                  <button
                    style={{ backgroundImage: `url(${bgimg})` }}
                    className="rounded-2xl  bg-center flex flex-col items-center justify-center text-white "
                  >
                    Subcribe
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <hr className='text-gray-400'/>
            <p className="text-center text-gray-400 mt-3">
              @2024 Your Company All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Footer;