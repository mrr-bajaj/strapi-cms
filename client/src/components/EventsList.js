import { addEvents, addPage } from "../redux/slices/eventsSlice";
import { EVENT_API_ENDPOINT } from "../utils/constants";
import EventCard from "./EventCard";
import { useSelector, useDispatch } from "react-redux";

const EventsList = () => {
  const dispatch = useDispatch();
  const page = useSelector((store) => store.events.meta.page);
  const pageCount = useSelector((store) => store.events.meta.pageCount);
  const handleViewMore = async () => {
    const newPage = page + 1;
    const data = await fetch(
      EVENT_API_ENDPOINT + `&pagination[page]=${newPage}`
    );
    const json = await data.json();
    const finalEventsList = [...eventsList, ...json.data];
    dispatch(addEvents(finalEventsList));
    dispatch(addPage(newPage));
  };
  const selectedFilter = useSelector((store) => store.events.selectedFilter);
  let eventsList = useSelector((store) => store.events.eventsList);
  if (selectedFilter !== "All") {
    eventsList = eventsList.filter(
      (event) => event.attributes.name === selectedFilter
    );
  }
  return (
    <>
      <div className="flex flex-wrap mx-20">
        {eventsList.map((event) => {
          return (
            <EventCard key={event.id} info={event?.attributes}></EventCard>
          );
        })}
      </div>
      {page < pageCount && (
        <div className="flex justify-center">
          <button
            className=" border px-6 py-2 my-4 text-red-500 border-red-500"
            onClick={() => handleViewMore()}
          >
            View more
          </button>
        </div>
      )}
    </>
  );
};

export default EventsList;
