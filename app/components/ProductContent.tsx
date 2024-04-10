"use client";
import Image from "next/image";
import { product } from "../ts/product";
import { useState } from "react";
import HeartFill from "./icons/HeartFill";
import HeartEmpty from "./icons/HeartEmpty";

function ProductContent({ data }: { data: product }) {
  const [heart, setHeart] = useState(false);
  return (
    <div className="relative mb-6 flex items-start p-2 gap-x-4">
      <div className="relative">
        <Image src={data.image} alt={data.name} width={145} height={145} />
        {data.badge == "Live auction" ? (
          <span className="bg-primary py-1 px-3 lg:py-3 lg:px-6 rounded-tl-full rounded-br-full text-white text-[8px] lg:text-[12px] absolute bottom-0 right-0">
            {data.badge}
          </span>
        ) : (
          <span className="bg-secondary py-1 px-3 lg:py-3 lg:px-6 rounded-tl-full rounded-br-full text-white text-[8px] lg:text-[12px] absolute bottom-0 right-0">
            {data.badge}
          </span>
        )}
      </div>
      <div>
        <h2 className="text-sm lg:text-lg text-gray1 mb-2">{data.name}</h2>
        <p className="text-gray3 text-sm lg:text-lg mb-2">
          starting price
          <b className="text-sm font-bold text-gray1 ml-1 lg:ml-2 lg:text-2xl">
            {data.price}
          </b>
        </p>
        <p className="text-gray3 text-sm lg:text-lg flex items-center gap-2 flex-wrap lg:flex-nowrap">
          <span className="w-full lg:w-auto">Lot starts in</span>
          <ul className="flex items-center gap-4 flex-wrap">
            <li className="bg-yellow-light rounded-3xl py-1.5 px-4 text-yellow font-bold text-sm lg:text-lg">
              {data.startsIn[0]}{" "}
              <span className="text-[8px] lg:text-sm">Days</span>
            </li>
            <li className="bg-yellow-light rounded-3xl py-1.5 px-4 text-yellow font-bold text-sm lg:text-lg">
              {data.startsIn[1]}{" "}
              <span className="text-[8px] lg:text-sm">Hours</span>
            </li>
            <li className="bg-yellow-light rounded-3xl py-1.5 px-4 text-yellow font-bold text-sm lg:text-lg">
              {data.startsIn[2]}{" "}
              <span className="text-[8px] lg:text-sm">Minutes</span>
            </li>
          </ul>
        </p>
      </div>
      <button
        className="absolute left-4 top-4 bg-white rounded-full p-1 lg:rounded-none lg:p-0 lg:bg-transparent lg:left-auto lg:top-6 lg:right-6"
        onClick={() => setHeart(!heart)}
      >
        {heart ? <HeartFill /> : <HeartEmpty />}
      </button>
    </div>
  );
}

export default ProductContent;
