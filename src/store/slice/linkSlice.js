import { createSlice } from "@reduxjs/toolkit";
import { getAllTour, getTourById } from "../thunks/tourThunk";

const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    error: "",
    loading: false,
    tourById: [],
  },
  reducers: {
    // addTour(state, action) {
    //   state.tours.push(action.payload);
    // },
    // deleteTour(state, action) {
    //   state.tours = state.tours.filter((tour) => tour.id !== action.payload);
    // },
  },
  //            строитель
  extraReducers: (builder) => {
    builder
      .addCase(getAllTour.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(getAllTour.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTourById.fulfilled, (state, action) => {
        state.tourById = [action.payload];
      });
  },
});

export const { addTour, deleteTour } = tourSlice.actions;

export const tourReducer = tourSlice.reducer;
