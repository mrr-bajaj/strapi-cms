import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/eventsSlice";

const store = configureStore({
  reducer: {
    events: eventsSlice,
  },
});

export default store;
