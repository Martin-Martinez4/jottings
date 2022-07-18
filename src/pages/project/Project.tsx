
import { toggleState } from '../../utils/toggleState';

import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalHOC from '../../component/ModalHOC/ModalHOC';
import CreateCategoryPrompt from '../../component/CreateCategoryPrompt/CreateCategoryPrompt';

import { useSelector, useDispatch } from 'react-redux';
import PlusIcon from '../../component/Svg_Icons/PlusIcon/PlusIcon';
import LogoSVGAlt from '../../component/Svg_Icons/Logo/Logo._svg alt';
import { getUser } from '../../actions/authSlice';

import { CategoriesContainer, TopBar, SideBar } from './project.styles';

import DragAndDrop from '../../component/DragAndDrop/DragAndDrop';

import { StateType } from '../../types/state.type';
import { getProject } from '../../actions/projectSlice';


const Project = () => {

 
    const dispatch = useDispatch();

    const { project_id } = useParams();

    useEffect(() => {

      dispatch(getProject(project_id))


    }, [])
  
    
    const project = useSelector((state: StateType) => state.project.project);

    const categories = useSelector((state: StateType) => {

      const categories = state.project.categories
      
      let categoriesArray: ReactElement[] = []

      if(categories){

        let dropDownCategories:any[] = [];
        
        const selectElements =  [<option id={``} value=""></option>, ...Object.keys(categories).map((object)  => {

          const category = categories[`${object}`]

          return (
            
                  <option id={`${category._id}`} value={category._id}>{category.title}</option>
          )

        })]


        dropDownCategories.push(selectElements)
        
        Object.keys(categories).forEach((object) => {
                  
          const category = categories[`${object}`]
  
  
          
          categoriesArray[category.index] = (<div key={`id_${category._id}`}>
            <DragAndDrop  id={category._id} name={category.title} dropDownCategories={dropDownCategories}></DragAndDrop>
            </div>)
  
  
        })
      }

      return categoriesArray


    });

    useEffect(() => { dispatch(getUser()) }, [project, dispatch]);
    

    const [newVisible, setNewVisible] = useState(false);
 
  
    return(
      <>
        <ModalHOC visible={newVisible}>
          <CreateCategoryPrompt toggleModalVisible={() => toggleState(setNewVisible, newVisible)}></CreateCategoryPrompt>
          
        </ModalHOC>


      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <TopBar>
          <LogoSVGAlt></LogoSVGAlt>
          
          <h3>{project.title}</h3>

          <PlusIcon clicked={() => toggleState(setNewVisible, newVisible)} title={"Create New Category"}></PlusIcon>



        </TopBar>


        <div style={{display: "flex"}}>

        <SideBar>
          <p style={{color: "white"}}>...</p>

        </SideBar>

        <div>

        <CategoriesContainer> 
            {
              categories
            }
        </CategoriesContainer>
          </div>
        </div>
      </div>
      </>
    )


}

export default Project;

