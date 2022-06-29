
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../sagas/rootSaga';
import taskReducer from "../actions/taskSlice";
import projectReducer from "../actions/projectSlice";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({

    reducer: {
        // task: taskReducer,
        project: projectReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


