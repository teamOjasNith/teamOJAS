import React from "react";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
      <img className="w-32 h-32 m-auto" src="/icons/ojas.png" alt="" />
      <h1 className="text-red-400 text-5xl text-center font-serif my-12">
        Team OJAS
      </h1>
      <p className="text-gray-200 text-2xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        corporis facere reprehenderit tempore sunt ut doloribus, ex sed aut
        quidem esse! Temporibus ullam nisi inventore ducimus, cum obcaecati?
        Assumenda necessitatibus eaque reiciendis quis error adipisci omnis
        minima hic dolore id.
      </p>
    </div>
  );
}