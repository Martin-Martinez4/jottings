
import { createSlice } from "@reduxjs/toolkit";



export const taskSlice = createSlice({

    name: "data",
    initialState: {},

    reducers: { 

      getChangeType() {},
      ChangeType: (state, action) => {

          // const targetTask = state[`${action.payload.id}`]

          // state[`${action.payload.id}`] = {...targetTask, type: action.payload.type}

          return {...state, ...action.payload}

      }
    }


})

export const { getChangeType, ChangeType } = taskSlice.actions;

export default taskSlice.reducer;

