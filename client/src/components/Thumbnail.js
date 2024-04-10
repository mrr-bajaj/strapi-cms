import React from 'react'
import { EVENT_THUMBNAIL_URL2 } from '../utils/constants'

const Thumbnail = () => {
  return (
    <div className="bg-gradient-to-b  from-black to-black">
      <img
        className="w-full h-[400px] object-none opacity-50"
        src={EVENT_THUMBNAIL_URL2}
        alt="event_thumbnail_url"
      ></img>
      <div className="absolute top-[240px] left-[35vw] text-center text-white">
        <div className="text-6xl font-bold">Our events gallery</div>
        <div className="py-6 w-[30vw] text-xl text-wrap ">
          Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.
        </div>
      </div>
    </div>
  )
}

export default Thumbnail