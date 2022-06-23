
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../sagas/rootSaga';
import taskReducer from "../actions/taskSlice";
import projectReducer from "../actions/projectSlice";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default configureStore({

    reducer: {
        task: taskReducer,
        project: projectReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);


