
import './App.css';

import Home from './pages/Home';
import { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux";
import { getProject } from "./actions/projectSlice";


function App() {

  const dispatch = useDispatch();

  const project = useSelector(state => state.project);

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
