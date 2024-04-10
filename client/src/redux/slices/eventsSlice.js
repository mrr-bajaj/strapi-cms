import { createSlice } from "@reduxjs/toolkit";

const initialEventsSlice = {
  eventsList: [],
  selectedFilter: "All",
  meta: {
    page: 0,
    pageCount: null,
  },
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventsSlice,
  reducers: {
    addEvents: (state, action) => {
      state.eventsList = action.payload;
    },
    addFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    addPage: (state, action) => {
      state.meta.page = action.payload;
    },
    addPageCount: (state, action) => {
      state.meta.pageCount = action.payload;
    },
  },
});

export const { addEvents, addFilter, addPage, addPageCount } =
  eventsSlice.actions;
export default eventsSlice.reducer;
