import React from "react";
import { LOGO_URL } from "../utils/constants";
import { TbHeartFilled } from "react-icons/tb";
import {
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-16">
      <div className="flex justify-between  p-20 pr-40">
        <div>
          <img src={LOGO_URL} alt="logo"></img>
        </div>
        <div className="w-[10%]">
          <div className="font-bold">DBTR National Higher Secondary School</div>
          <div className="font-bold text-blue-700">Virtuousness is life</div>
          <div className="text-sm py-6">
            Established in 1901, DBTR is situated in the temple town of
            Mayiladuthurai
          </div>
        </div>
        <div>
          <div className="pb-6">QUICK LINKS</div>
          <div className="pb-2">Admissions</div>
          <div className="pb-2">Alumni association</div>
          <div className="pb-2">Donate</div>
          <div className="pb-2">Events</div>
        </div>
        <div className="w-[15%]">
          <div className="pb-6">CONTACT</div>
          <div className="pb-2">
            DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
            Tamilnadu - 609001
          </div>
          <div className="pb-2">+91 4364223272</div>
          <div className="underline">contact@nationalhighschool.in</div>
        </div>
        <div className="w-[10%]">
          <div className="font-bold text-md">
            Big or small, you can make an impact
          </div>

          <button className="flex items-center border rounded my-2 px-10 py-2 bg-red-600 text-white border-red-400">
            <span className="mx-2">Donate</span>
            <TbHeartFilled />
          </button>
        </div>
      </div>
      <div className="flex px-20 justify-between">
        <div className="flex items-center">
          <FaRegCopyright /> DBTR 2023, All Rights Reserved | Sitemap
        </div>
        <div className="flex text-lg pr-20">
          <FaTwitter className="mx-2"/>
          <FaLinkedin className="mx-2"/>
          <CiInstagram className="mx-2" />
          <CiFacebook className="mx-2"/>
          <FaYoutube className="mx-2"/>
        </div>
      </div>
      <div className="px-20 py-6">Designed by PEPPER SQUARE</div>
    </div>
  );
};

export default Footer;
