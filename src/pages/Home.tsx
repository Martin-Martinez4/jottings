
import React, { ReactElement, useEffect, useState } from 'react';

import { Task } from '../types/draggableTypes';

import { getCreateCategory, getDeleteCategory } from '../actions/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import Plus_Icon from '../component/Svg_Icons/Plus_Icon/Plus_Icon';
import Close_Icon from '../component/Svg_Icons/Close_Icon/Close_Icon';

import DragAndDrop from '../component/DragAndDrop/DragAndDrop';

import "./home.css";
import { JsxElement } from 'typescript';
import { StateType } from '../types/project.type';


const Home = () => {

    const dispatch = useDispatch();
    
    const project = useSelector((state: StateType) => state.project.project);

    const state = useSelector((state: StateType) => state.project)

    const categories = useSelector((state: StateType) => {

      const categories = state.project.categories
      
      let categoriesArray: ReactElement[] = []

      if(categories){

  
        Object.keys(categories).forEach((object) => {
                  
          const category = categories[`${object}`]
  
  
          
          categoriesArray[category.index] = (<div key={`id_${category._id}`}>
            <DragAndDrop  id={category._id} name={category.title}></DragAndDrop>
            </div>)
  
  
        })
      }

      return categoriesArray


    });
    const tasks = useSelector((state: StateType) => state.project.tasks);

    useEffect(() => {}, [project]);

    const [ taskArrays, setTaskArray ] = useState<{[key: string]: ReactElement<any, string>[]}>({})

    const [newVisible, setNewVisible] = useState(false);
    const [ newCategory, setNewCategory ] = useState({

      title: "",
      // content: "",

    })

  const toggleVisible = (setFunc: React.Dispatch<React.SetStateAction<any>>, currentState: boolean) => {

    setFunc(!currentState);

  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: string) => {


      setFunc((CurrentState: object) => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))
  
      e.preventDefault();
  
      
  }

  const clearState = (setFunc: { (value: React.SetStateAction<{ title: string; }>): void; (arg0: (CurrentState: any) => any): void; }, CurrentState: { title?: string; }) => {

    Object.keys(CurrentState).forEach( (stateProp) => {
    
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
              
  
              // categories && Object.keys(categories).forEach((object) => {
                
              //   const category = categories[`${object}`]


                
              //   categoriesArray[category.index] = (<div key={`id_${category._id}`}>
              //     <DragAndDrop  id={category._id} name={category.title}></DragAndDrop>
              //     </div>)


              // })

              categories
            }
        </div>
      </>
    )


}

export default Home;

