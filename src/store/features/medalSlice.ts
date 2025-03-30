import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {sortMedalListByType, calculateTotalMedals} from '@/services/medalSort';
import Medal from '@/interfaces/Medal';
import MedalState from '@/interfaces/MedalState';

const initialState: MedalState = {
  sortBy: 'gold',
  medalList: [],
};

export const medalReducer = createSlice({
  name: 'medals',
  initialState,
  reducers: {
    CALCULATE_TOTAL_MEDALS: (state) => {
      state.medalList = calculateTotalMedals(state.medalList);
    },
    SET_MEDALS: (state, action: PayloadAction<Medal[]>) => {
      state.medalList = action.payload;
    },
    SORT_MEDALS_BY_TYPE: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      state.medalList = sortMedalListByType(action.payload, state.medalList);
    }
  },
});

export const { SET_MEDALS, SORT_MEDALS_BY_TYPE, CALCULATE_TOTAL_MEDALS } = medalReducer.actions;

export default medalReducer.reducer;