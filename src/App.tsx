
import './App.css';

import {
  Routes,
  Route,
 
} from "react-router-dom";

import ErrorModal from './component/ErrorModal/ErrorModal';

import { StateType } from './types/state.type';

import ProjectView from './pages/project/Project';
import Home from './pages/home/Home';
import RegisterPage from './pages/Register/Register';
import RequireAuth from './hooks/requireAuth';

import Signin from './pages/signin/Signin';
import { useSelector } from 'react-redux';


function App() {

  const error = useSelector((state: StateType) => state.errorAndLoading.error);


  return (
    <div className="App">
      {
         error.isThereAnError
         ?
         <ErrorModal></ErrorModal>
         :
         ""
      }
    

      <Routes>


        <Route path="/*" element={<Signin/>}/>

        <Route element={ <RequireAuth></RequireAuth> }>

          <Route path="/*" element={<Home/>}/>

          <Route path="/project/:project_id" element={<ProjectView/>} />
          <Route path="/home" element={<Home/>} />

        </Route>

          <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
