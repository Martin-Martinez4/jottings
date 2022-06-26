
import { createSlice, current } from "@reduxjs/toolkit";

const projectSlice = createSlice({

    name: 'project',
    initialState: {},
    reducers: {

        getProject() {},
        oneProject: (state, action) => {

            return {...state, project: action.payload.project, categories: action.payload.categories, tasks: action.payload.tasks }

        },
        getChangeType() {},
        ChangeType: (state, action) => {
  
          const payload = action.payload;
          const tasks = action.payload.tasks;

        
          const newTasks = {...state.tasks, ...tasks}
          
          if(action.payload.tasks[action.payload.new_category_id] === undefined){

            newTasks[action.payload.new_category_id] = {}

          }
          
          if(action.payload.tasks[action.payload.old_category_id] === undefined){

            newTasks[action.payload.old_category_id] = {}

          }

  
          if(payload.success === true){
    
            return state = {...state, tasks: newTasks}
  
          }
          else{
            
            return {...state }
  
          }
  
        },
        getDeleteTask() {},
        deleteTask: (state, action) => {

            const newTasksObject = action.payload.new_tasks_object;

            console.log("got here");

            return state = {...state, tasks: {...state.tasks, ...newTasksObject}}

        },
        getCreateTask() {},
        createTask: (state, action) => {

            const newTasksObject = action.payload.new_tasks_object;

            return state = {...state, tasks: {...state.tasks, ...newTasksObject}}

        },
        getEditTask() {},
        editTask: (state, action) => {

            const category_id = action.payload.category_id;
            const newTaskObject = action.payload.new_task_object;

            return state = {...state, tasks: {...state.tasks, [category_id]:{...state.tasks[category_id], ...newTaskObject}}};

        },
        getCreateCategory() {},
        createCategory: (state, action) => {

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            return state = {...state, categories: {...state.categories, [category_id]: newCategoryObject[category_id]}};

        },
        getDeleteCategory() {},
        deleteCategory: (state, action) => {

            // Send back cat_id: {} then spread in
            // also set tasks[cat_id]: {}

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            console.log(newCategoryObject)

            return state = {...state, categories: {...newCategoryObject}};

        },
        getEditCategory() {},
        editCategory: (state, action) => {

            // Send back cat_id: {title, _id} then spread into state

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            return state = {...state, categories: {...state.categories, [category_id]: newCategoryObject[category_id]}};

        }
    }
})

export const { 
                getProject, oneProject, 
                getChangeType, ChangeType, 
                getDeleteTask, deleteTask, 
                getCreateTask, createTask,
                getEditTask, editTask,
                getCreateCategory, createCategory,
                getDeleteCategory, deleteCategory,
                getEditCategory, editCategory,
            } = projectSlice.actions;
export default projectSlice.reducer;

