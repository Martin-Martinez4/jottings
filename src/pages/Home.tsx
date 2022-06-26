
import React, { ReactElement, useEffect, useState } from 'react';

import { Task } from '../types/draggableTypes';

import { getCreateCategory, getDeleteCategory } from '../actions/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import Plus_Icon from '../component/Svg_Icons/Plus_Icon/Plus_Icon';
import Close_Icon from '../component/Svg_Icons/Close_Icon/Close_Icon';

import DragAndDrop from '../component/DragAndDrop/DragAndDrop';

import {DataType} from "../types/dataType";

import "./home.css";


const Home = () => {

    const dispatch = useDispatch();
    
    const project = useSelector(state => state.project.project);
    const categories = useSelector(state => state.project.categories);
    const tasks = useSelector(state => state.project.tasks);

    useEffect(() => {}, [project]);

    const [ taskArrays, setTaskArray ] = useState<{[key: string]: ReactElement<any, string>[]}>({})

    const [newVisible, setNewVisible] = useState(false);
    const [ newCategory, setNewCategory ] = useState({

      title: "",
      // content: "",

    })

  const toggleVisible = (setFunc, currentState) => {

    setFunc(!currentState);

  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFunc, CurrentState) => {


      setFunc(CurrentState => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))
  
      e.preventDefault();
  
      
  }

  const clearState = (setFunc, CurrentState) => {

    Object.keys(CurrentState).forEach( (stateProp) => {
  
      console.log(stateProp);
  
      setFunc(CurrentState => ({...CurrentState, [stateProp]: ""}))
  
      }
  
    )
  
  }

  const onCreate = () => {

    const body = {

        title: newCategory.title,
        project_id: project.project_id,
    }


    dispatch(getCreateCategory(body))

    toggleVisible(setNewVisible, newVisible);

    clearState(setNewCategory, newCategory)

    return

  }

  // const onDelete = () => {

  //   const body = {

  //     project_id: project.project_id,
  //     category_id: newCategory.title,
  //   }

  //   dispatch(getDeleteCategory)

  // }
    
  
    return(
      <>
        <Plus_Icon clicked={() => toggleVisible(setNewVisible, newVisible)} ></Plus_Icon>
        {/* <Close_Icon clicked={() => onDelete()} ></Close_Icon> */}
        {
          newVisible
          ?
          <div>
            <input name="title" value={newCategory.title} onChange={(e) => onInputChange(e, setNewCategory, newCategory.title)}></input>
            {/* <textarea name="content" value={newCategory.content} onChange={(e) => onInputChange(e, setNewCategory, newCategory.content)} ></textarea> */}
            <span  onClick={ () => onCreate() }>Save</span><span>Cancel</span>
          </div>
          :""
        }
        <div className="categories-container">
            {
              categories && Object.keys(categories).map((object) => {
                
                const category = categories[`${object}`]
                
                return (<div key={`id_${category._id}`}>
                  <DragAndDrop  id={category._id} name={category.title}></DragAndDrop>
                  </div>)

              })
            }
        </div>
      </>
    )


}

export default Home;

