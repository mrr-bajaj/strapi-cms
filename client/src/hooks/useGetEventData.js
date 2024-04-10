import { useDispatch } from "react-redux";
import { EVENT_API_ENDPOINT } from "../utils/constants";
import { addEvents, addPage, addPageCount } from "../redux/slices/eventsSlice";
import { useEffect } from "react";

export const useGetEventData = () => {
  const dispatch = useDispatch();
  const getEvents = async () => {
    const data = await fetch(EVENT_API_ENDPOINT);
    const json = await data.json();
    dispatch(addEvents(json?.data));
    dispatch(addPage(json?.meta?.pagination?.page));
    dispatch(addPageCount(json?.meta?.pagination?.pageCount));
  };

  useEffect(() => {
    getEvents();
  }, []);
};
