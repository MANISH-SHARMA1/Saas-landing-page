import React from "react";
// import "./Shows.css";
import BetterCallSaul from "../../assets/BetterCallSaul.jpg";
import ElChapo from "../../assets/ElChapo.jpg";
import LostInSpace from "../../assets/LostInSpace.jpg";
import MoneyHeist from "../../assets/MoneyHeist.jpg";
import Naruto from "../../assets/Naruto.jpg";
import PeakyBlinders from "../../assets/PeakyBlinders.jpg";
import TheVampireDiaries from "../../assets/TheVampireDiaries.jpg";
import TheWitcher from "../../assets/TheWitcher.jpg";
import Vikings from "../../assets/Vikings.jpg";
import Wednesday from "../../assets/Wednesday.jpg";
function Shows() {
  const showsImg = [
    {
      movie: BetterCallSaul,
      title: "Better Call Saul",
      price: "$ 1.99",
    },
    {
      movie: ElChapo,
      title: "El Chapo",
      price: "$ 2.99",
    },
    {
      movie: LostInSpace,
      title: "Lost In Space",
      price: "$ 1.59",
    },
    {
      movie: MoneyHeist,
      title: "Money Heist",
      price: "$ 3.99",
    },
    {
      movie: Naruto,
      title: "Naruto",
      price: "$ 2.79",
    },
    {
      movie: PeakyBlinders,
      title: "Peaky Blinders",
      price: "$ 1.90",
    },
    {
      movie: TheVampireDiaries,
      title: "The Vampire Diaries",
      price: "$ 1.59",
    },
    {
      movie: TheWitcher,
      title: "The Witcher",
      price: "$ 4.99",
    },
    {
      movie: Vikings,
      title: "Vikings",
      price: "$ 3.00",
    },
    {
      movie: Wednesday,
      title: "Wednesday",
      price: "$ 2.49",
    },
  ];
  return (
    <>
      {/* This component is designed using Tailwind CSS */}
      {/* Use external library (i.e. tailwind scrollbar hide)to hide scrollbar. */}
      <div className="flex flex-row overflow-y-scroll scrollbar-hide">
        {/* This part shows the total information about the movies as poster, title, price, watch now button. */}
        <div className="flex bg-black ">
          {showsImg.map((shows) => (
            <div className="mx-16 my-10 w-80 bg-neutral-900 text-slate-50 rounded-xl overflow-hidden content-around">
              <img
                className="rounded-xl hover:scale-105 w-80"
                src={shows.movie}
                alt={shows.title}
              />
              <div className="desc text-center text-md font-bold my-5 ">
                <p className="text-xl">{shows.title}</p>
                <div className="bottom flex gap-32 m-5 ">
                  <p className="bg-neutral-700 p-1 rounded-lg">{shows.price}</p>
                  <p className="bg-neutral-700 p-1 rounded-lg cursor-pointer hover:bg-slate-50 hover:text-neutral-700">
                    Watch Now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shows;
