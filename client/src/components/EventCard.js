import React, { useState } from "react";
import { SERVER_URL } from "../utils/constants";
import Modal from "./Modal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const EventCard = ({ info }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="border w-[480px] shadow-md m-2 mx-10 rounded-t-2xl rounded-b-lg cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <LazyLoadImage
          className="rounded-t-2xl object-cover w-[100%] h-[35vh]"
          src={SERVER_URL + info?.image?.data?.attributes?.url}
          alt="event-card"
          effect="blur"
        ></LazyLoadImage>
        <div className="py-1 text-sm px-2">{info?.name}</div>
        <div className="text-xs px-2 pb-2">{info?.date}</div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} info={info}></Modal>}
    </>
  );
};

export default EventCard;
