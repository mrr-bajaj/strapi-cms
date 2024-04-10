import Thumbnail from "./Thumbnail";
import FiltersList from "./FiltersList";
import EventsList from "./EventsList";
import { useGetEventData } from "../hooks/useGetEventData";

const Body = () => {
  useGetEventData();
  return (
    <div>
      <Thumbnail></Thumbnail>
      <FiltersList></FiltersList>
      <EventsList></EventsList>
    </div>
  );
};

export default Body;
