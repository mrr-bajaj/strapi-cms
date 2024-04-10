import React from "react";
import { SERVER_URL } from "../utils/constants";
import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Modal = ({ info, setShowModal }) => {
  const handleCloseButton = () => {
    setShowModal(false);
  };
  return (
    <div
      className="fixed inset-0 bg-slate-600 bg-opacity-85 flex items-center justify-center z-50"
      onClick={handleCloseButton}
    >
      <div
        className="text-white rounded-md shadow-lg- w-[25%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end text-3xl py-2">
          <IoMdClose className="cursor-pointer" onClick={handleCloseButton} />
        </div>
        <LazyLoadImage
          className="rounded-t-md w-[100%] h-[35vh]"
          src={SERVER_URL + info?.image?.data?.attributes?.url}
          alt="event-card"
          effect="blur"
        ></LazyLoadImage>
        <div className="flex justify-between my-2">
          <span>{info?.name}</span>
          <span>{info?.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
