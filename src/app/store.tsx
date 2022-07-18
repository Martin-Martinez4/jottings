
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../sagas/rootSaga';
import projectReducer from "../actions/projectSlice";
import authReducer, { Logout } from "../actions/authSlice";
import errorAndLoadingReducer, { errorMessage } from '../actions/errorAndLoadingSlice';


const errorHandlerMiddleware = ({dispatch}: {dispatch: any}) => (next: (arg0: any) => void) => (action: any) => {

    // Enum the error messages

    console.log(action.payload)
    
    if(action.payload?.isError){

        dispatch(errorMessage({ isThereAnError: true, message: action.payload.message  }))

        if(action.payload.statusCode === 403){

            const body = {
                email: "", 
                username: "", 
                projects: [], 
                permissions: {}, 
                access_token: "", 
                isAuth: false 
            }
        
        
            dispatch(Logout(body))
        }

        return
    }


    next(action);
};


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, errorHandlerMiddleware];

export const store = configureStore({

    reducer: {
        // task: taskReducer,
        project: projectReducer,
        auth: authReducer,
        errorAndLoading: errorAndLoadingReducer
    },
    // middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
    middleware: [...getDefaultMiddleware({ thunk: false}), ...middlewares]
})

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


