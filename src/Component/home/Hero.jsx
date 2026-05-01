import React from 'react';
import HeroImg from '../../assets/pngwing 1.png'

const Hero = () => {
    return (
      <div className="hero bg-base-200 min-h-[70vh] my-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full px-16 justify-between">
          <img src={HeroImg} />
          <div>
            <h1 className="text-5xl leading-20 font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn mt-8 bg-[#23BE0A] text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;