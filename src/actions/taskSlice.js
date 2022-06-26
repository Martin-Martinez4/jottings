
import { createSlice, current } from "@reduxjs/toolkit";




export const taskSlice = createSlice({

    name: "data",
    initialState: {},

    reducers: { 

      getChangeType() {},
      ChangeType: (state, action) => {

        const payload = action.payload

        const newTasks = payload.tasks

        

        if(payload.success === true){

          // have to return tasks objects

          console.log(current(state))
          state = {...state, tasks: {...state.tasks, newTasks}}



          console.log(`newTasks: `, action.payload.tasks)
          console.log(current(state))


          return {...state, tasks: {...state.tasks, newTasks}}

        }
        else{
          
          return {...state }

        }



          // const targetTask = state[`${action.payload.id}`]

          // state[`${action.payload.id}`] = {...targetTask, type: action.payload.type}


      }
    }


})

export const { getChangeType, ChangeType } = taskSlice.actions;

export default taskSlice.reducer;

