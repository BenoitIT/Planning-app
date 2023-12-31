import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedModule: "Choose Module",
};

export const moduleSelectorSlice = createSlice({
  name: "selectedModule",
  initialState,
  reducers: {
    handleSetSelectedModule: (state, action) => {
      return {
        ...state,
        selectedModule: action.payload,
      };
    },
  },
});

export const { handleSetSelectedModule } = moduleSelectorSlice.actions;
export default moduleSelectorSlice.reducer;
