"use client";
import { useState } from "react";
import Chivron from "./icons/Chivron";
import Download from "./icons/Download";
import EyeIcon from "./icons/EyeIcon";
import Share from "./icons/Share";
import DownloadYellow from "./icons/DownloadYellow";
import QrLogo from "./QrLogo";
import Image from "next/image";

function QrCard() {
  const [slideToggle, setSlideToggle] = useState(true);
  return (
    <div className="bg-white p-4 lg:p-6 mt-6 rounded-[21px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg lg:text-2xl font-bold">QR Code</h2>
        <ul className="flex items-center gap-x-6">
          <li>
            <EyeIcon />
          </li>
          <li>
            <Share />
          </li>
          <li>
            <Download />
          </li>
          <li>
            <button
              className={` w-6 h-6 flex items-center justify-center rounded-full transition-all ease-in-out duration-300 ${
                slideToggle
                  ? "rotate-180 bg-[#F6F4F5]"
                  : "rotate-0 bg-[#FBE7EE]"
              }`}
              onClick={() => setSlideToggle(!slideToggle)}
            >
              <Chivron />
            </button>
          </li>
        </ul>
      </div>
      <div
        className={`
          ${
            slideToggle
              ? "opacity-100 h-auto visible pt-4"
              : "opacity-0 h-0 invisible"
          }
           transition-all
           ease-in-out
           duration-300
           overflow-hidden
        `}
      >
        <div className="bg-yellow-light py-5 px-4 text-[12px] flex items-center gap-x-2 rounded-2xl text-gray1">
          <DownloadYellow />
          Download the QR code or share it with your friends.
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary p-5 mt-4 rounded-[20px]">
          <div className="bg-white rounded-[18px] text-center py-8">
            <QrLogo />
            <h2 className="text-xl lg:text-2xl font-bold py-2 text-gray1">
              Hala Ahmed
            </h2>
            <div className="flex justify-center">
              <Image src={"/qr.png"} alt="qr" width={135} height={135} />
            </div>
            <p className="text-sm mt-2">Follow Us on Mazaady</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCard;
