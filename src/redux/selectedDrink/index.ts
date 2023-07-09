import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeatureKey } from "redux/featureKey";
import { RootState } from "redux/reducers";
import { DrinkProps } from "types";

/**
 * Payload
 */
export type SelectedDrinkPayload = {
  selectedDrink: DrinkProps | null;
};

/**
 * State
 */
export type SelectedDrinkState = {
  selectedDrink: DrinkProps | null;
};

const initialState: SelectedDrinkState = {
  selectedDrink: null,
};

/**
 * Slice
 * @see https://redux-toolkit.js.org/api/createslice
 */
const slice = createSlice({
  name: FeatureKey.SELECTED_DRINK,
  initialState,
  reducers: {
    updateSelectedDrink: (
      state: SelectedDrinkState,
      action: PayloadAction<SelectedDrinkPayload>
    ): SelectedDrinkState => {
      const { selectedDrink } = action.payload;
      return {
        ...state,
        selectedDrink,
      };
    },
  },
});

/**
 * Reducer
 */
export const selectedDrinkReducer = slice.reducer;

/**
 * Action
 */
export const { updateSelectedDrink } = slice.actions;

/**
 * Selector
 * @param state PageStateType
 */
export const selectedDrinkSelector = (state: RootState): SelectedDrinkState =>
  state.selectedDrink;
