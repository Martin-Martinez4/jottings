
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../app/store';
import { EditTaskType } from "../types/project.actions.types";
import { ProjectType } from "../types/project.type";

interface ActionGetProject {
  type: string;
  payload: string
}


const projectSlice = createSlice({

    name: 'project',
    initialState: {project:{}, tasks:{}, categories: {}},
    reducers: {

        getProject(state, action){},
        oneProject: (state, action) => {

            return {...state, project: action.payload.project, categories: action.payload.categories, tasks: action.payload.tasks }

        },
        getChangeType(state, action) {},
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
    
            return state = {
                            ...state, 
                            tasks: newTasks,
                            categories:{...state.categories, 
                                [action.payload.old_category_id]: {...(state.categories as any)[action.payload.old_category_id], length: action.payload.old_category_length},
                                [action.payload.new_category_id]: {...(state.categories as any)[action.payload.new_category_id], length: action.payload.new_category_length}
                            }
                          }
  
          }
          else{
            
            return {...state }
  
          }
  
        },
        getDeleteTask(state, action) {},
        deleteTask: (state, action) => {

            const newTasksObject = action.payload.new_tasks_object;

            const category_id = action.payload.category_id;
            return state = {...state, categories:{...state.categories, [action.payload.category_id]: {...(state.categories as any)[category_id], length: action.payload.length}}, tasks: {...state.tasks, ...newTasksObject}}

        },
        getCreateTask(state, action) {},
        createTask: (state, action) => {

            const newTasksObject = action.payload.new_tasks_object;

            const category_id = action.payload.category_id;

            return state = {...state, categories:{...state.categories, [category_id]: {...(state.categories as any)[category_id], length: action.payload.length}}, tasks: {...state.tasks, ...newTasksObject}}

        },
        getEditTask(state, action) {},
        editTask: (state, action: EditTaskType) => {

            const category_id = action.payload.category_id;
            const newTaskObject = action.payload.new_task_object;

            return state = {...state, tasks: {...state.tasks, [category_id]:{...(state.tasks as any)[category_id], ...newTaskObject}}};

        },
        getCreateCategory(state, action) {},
        createCategory: (state, action) => {

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            console.log(action.payload)

            return state = {...state, project: {...state.project, length: action.payload.projectLength}, categories: {...state.categories, [category_id]: newCategoryObject[category_id]}};

        },
        getChangeCategoryOrder(state, action) {},
        changeCategoryOrder: (state, action) => {


          // const category_id = action.payload.category_id;
          const new_categories_object = action.payload.new_categories_object;

          return state = {...state, categories: {...state.categories, ...new_categories_object}};

        },
        getDeleteCategory(state, action) {},
        deleteCategory: (state, action) => {

            // Send back cat_id: {} then spread in
            // also set tasks[cat_id]: {}

            const newCategoryObject = action.payload.new_category_object;

            return state = {...state, project: {...state.project, length: action.payload.projectLength}, categories: {...newCategoryObject}};

        },
        getEditCategory(state, action) {},
        editCategory: (state, action) => {

            // Send back cat_id: {title, _id} then spread into state

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            return state = {...state, categories: {...state.categories, [category_id]: newCategoryObject[category_id]}};

        },
        getChangeTaskOrder(state, action) {},
        changeTaskOrder: (state, action) => {

            // Send back cat_id: {title, _id} then spread into state

            const category_id = action.payload.category_id;
            const newCategoryObject = action.payload.new_category_object;

            return state = {...state, tasks: {...state.tasks, [category_id]: newCategoryObject[category_id]}};

        },
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
                getChangeTaskOrder, changeTaskOrder,
                getChangeCategoryOrder, changeCategoryOrder
            } = projectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.project.tasks
export const selectProject = (state: RootState) => state.project
export default projectSlice.reducer;

