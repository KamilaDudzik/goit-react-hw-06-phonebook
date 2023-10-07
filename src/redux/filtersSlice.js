const { createSlice } = require("@reduxjs/toolkit");

const filtersInitialState = { filter: "" }

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload
    },
  },
})

export const { filterContacts } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer