import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    // actions
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }

    }
})


export const { increment, decrement } = countSlice.actions

export default countSlice.reducer