import React from "react";
import ImageHero from "../../src/assets/images/hero.jpg";
import Rectangle from "../../src/assets/images/rectangle.jpg";
import IconCities from "../../src/assets/images/icon-trevel-svg/cities.svg";
import IconTraveler from "../../src/assets/images/icon-trevel-svg/traveler.svg";
import IconTreasure from "../../src/assets/images/icon-trevel-svg/treasure.svg";
import Button from "../elements/button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-24 mx-auto">
      <div className="flex items-center relative">
        <div className="w-3/5 pr-5">
          <h1 className="text-[42px] font-bold leading-tight mb-3 text-[#152C5B]">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 mt-10 text-gray-500 w-[35%]">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moment.
          </p>
          <Button className="px-5" isShadow isPrimary onclick={showMostPicked}>
            Show Me Now
          </Button>
          <div className="flex mt-20">
            <div className="mr-8">
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}
                <span className="text-gray-500 font-light"> Travelers</span>
              </h6>
            </div>

            <div className="mr-12">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {props.data.treasures}
                <span className="text-gray-500 font-light"> Treasure</span>
              </h6>
            </div>

            <div>
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}
                <span className="text-gray-500 font-light"> Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="w-2/5 ">
          <div style={{ width: "520px", height: "410px" }}>
            <img
              src={ImageHero}
              alt="Room with couses"
              className="absolute z-10 w-[520px] "
            />
            <img
              src={Rectangle}
              alt="Room with couses frame"
              className=" absolute -bottom-10 right-10 w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
