import { createSlice, configureStore } from "@reduxjs/toolkit";

const getData = createSlice({
  name: 'data',
  initialState: {
    data: [],
    checked: false
  },
  reducers: {
    get(state, actions) {
      state.data.push(...actions.payload)
    },
    checked(state) {
      state.checked = !state.checked
    }
  }
})


const likedSlice = createSlice({
  name: 'like',
  initialState: [],
  reducers: {
    like(state, actions) {
      state.push(actions.payload)
    },
    notLike(state, actions) {
      state = state.filter((id) => id !== actions.payload)
      return state
    }
  }
})


const store = configureStore({
  reducer: { liked: likedSlice.reducer, data: getData.reducer }
})

export const likedActions = likedSlice.actions;
export const getDataActions = getData.actions;

export default store;