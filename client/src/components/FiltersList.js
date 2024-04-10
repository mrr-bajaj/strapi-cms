import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../redux/slices/eventsSlice";

const FiltersList = () => {
  const dispatch = useDispatch();

  let eventsList = useSelector((store) => store.events.eventsList);
  const selectedFilter = useSelector((store) => store.events.selectedFilter);
  if (eventsList < 1) return;
  let eventsListName = eventsList.map((event) => event.attributes.name);
  const uniqNames = new Set(eventsListName);
  eventsListName = ["All", ...uniqNames];
  const handleFilterButton = (event) => {
    dispatch(addFilter(event));
  };
  return (
    <div className="px-20 py-8">
      {eventsListName.map((event, idx) => {
        return (
          <button
            key={idx}
            className={`px-4 py-1 m-2 rounded-2xl border  ${
              selectedFilter === event
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } `}
            onClick={() => handleFilterButton(event)}
          >
            {event}
          </button>
        );
      })}
    </div>
  );
};

export default FiltersList;
