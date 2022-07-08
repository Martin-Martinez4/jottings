
import './App.css';

import {
  Routes,
  Route,
 
} from "react-router-dom";
import { StateType } from './types/project.type';

import ProjectView from './pages/project/Project';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import RequireAuth from './hooks/requireAuth';

import { useDispatch, useSelector } from "react-redux";
import { getProject } from "./actions/projectSlice";


function App() {

  const dispatch = useDispatch();

  const isAuth = useSelector((state:StateType) => state.auth.isAuth);

  console.log(isAuth)

  useEffect(() => {

    dispatch(getProject("62ba0710f53789be2ac41114"))

  }, [])


  return (
    <div className="App">

      <Routes>



        <Route element={ <RequireAuth></RequireAuth> }>

          <Route path="/*" element={<Home/>}/>
          <Route path="/project" element={<ProjectView/>} />
          <Route path="/home" element={<Home/>} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;
