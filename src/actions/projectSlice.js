
import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({

    name: 'project',
    initialState: {},
    reducers: {

        getProject() {},
        oneProject: (state, action) => {

            return {...state, ...action.payload}

        }
    }
})

export const { getProject, oneProject } = projectSlice.actions;
export default projectSlice.reducer;

