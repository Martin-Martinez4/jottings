
import React, { ReactElement, useEffect, useState } from 'react';

import { ButtonContainer, RedButton, PrimaryButton, Input } from '../../global.style';

import { getCreateCategory, getDeleteCategory } from '../../actions/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import Plus_Icon from '../../component/Svg_Icons/Plus_Icon/Plus_Icon';
import Close_Icon from '../../component/Svg_Icons/Close_Icon/Close_Icon';

import { CategoriesContainer, TopBar, SideBar } from './project.styles';

import DragAndDrop from '../../component/DragAndDrop/DragAndDrop';

import "./home.css";
import { StateType } from '../../types/project.type';


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
    
  
    return(
      <>
        <TopBar>

          <Plus_Icon clicked={() => toggleVisible(setNewVisible, newVisible)} title={"Create New Category"} ></Plus_Icon>
        </TopBar>
        {
          newVisible
          ?
          <div>
            <Input name="title" value={newCategory.title} onChange={(e) => onInputChange(e, setNewCategory, newCategory.title)}></Input>
            <ButtonContainer>

              <PrimaryButton  onClick={ () => onCreate() }>Save</PrimaryButton>
              <RedButton onClick={() => toggleVisible(setNewVisible, newVisible)} >Cancel</RedButton>
            </ButtonContainer>
          </div>
          :""
        }

        <div style={{display: "flex"}}>

        <SideBar>test</SideBar>
        <CategoriesContainer>
            {
              
              categories
            }
        </CategoriesContainer>
        </div>
      </>
    )


}

export default Home;

