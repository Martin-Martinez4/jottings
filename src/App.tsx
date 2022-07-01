
import './App.css';

import Home from './pages/home/Home';
import { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux";
import { getProject } from "./actions/projectSlice";
import { StateType } from './types/project.type';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProject("62ba0710f53789be2ac41114"))

  }, [dispatch])


  return (
    <div className="App">

      <Home></Home>
    </div>
  );
}

export default App;
