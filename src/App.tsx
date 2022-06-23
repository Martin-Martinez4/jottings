
import './App.css';

import Home from './pages/Home';
import { useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux";
import { getProject } from "./actions/projectSlice";


function App() {

  const dispatch = useDispatch();

  const project = useSelector(state => state.project);

  useEffect(() => {

    dispatch(getProject("62b11390b112f2275f19299f"))

  }, [dispatch, project])


  return (
    <div className="App">

       
      <Home></Home>
    </div>
  );
}

export default App;
