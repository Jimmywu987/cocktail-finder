import { combineReducers } from "redux";

import { selectedDrinkReducer } from "./selectedDrink";

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({
  selectedDrink: selectedDrinkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
