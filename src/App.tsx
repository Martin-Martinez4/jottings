
import './App.css';

import {
  Routes,
  Route,
  Navigate
 
} from "react-router-dom";

import ProjectView from './pages/project/Project';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { getProject } from "./actions/projectSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProject("62ba0710f53789be2ac41114"))

  }, [dispatch])


  return (
    <div className="App">

      <Routes>

        <Route path="/*" element={<ProjectView/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
