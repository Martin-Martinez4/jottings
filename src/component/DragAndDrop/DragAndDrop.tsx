
import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getChangeType, getCreateTask, getEditCategory, getDeleteCategory, getChangeCategoryOrder } from '../../actions/projectSlice';
import { Container, TopBar, CreateNewPrompt, CategoryTitle, CreateBox } from "./dragAndDrop.styles";
import { Input, ButtonContainer, PrimaryButton, RedButton, TextArea } from '../../global.style';
import Draggable from '../Draggables/Draggable';
import { DragAndDropProps } from '../../types/draggableTypes';
import Plus_Icon from '../Svg_Icons/Plus_Icon/Plus_Icon';
import Edit_Icon from '../Svg_Icons/Edit_Icon/Edit_Icon';
import Close_Icon from '../Svg_Icons/Close_Icon/Close_Icon';
import "./dragAndDrop.css"
import { StateType } from '../../types/project.type';


const DragAndDrop: FC<DragAndDropProps> = ({ id, name }) => {

  const dispatch = useDispatch();

  const [newVisible, setNewVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [editTitle, setEditTitle] = useState({title: name});
  const [newTaskContent, setNewTaskContent] = useState({

    title: "",
    content: "",

  })

  const project = useSelector((state: StateType) => state.project.project)

  const category = useSelector((state: StateType) => state.project.categories[id])
  
  const tasks = useSelector((state: StateType) => 
    {
        const tasks = state.project.tasks[id]
      
        let toReturn: ReactElement<any, any>[] = []

        if(tasks){


          Object.keys(tasks)?.forEach((task_id) => {
  
            const task = tasks[task_id]

            toReturn[task.index] = <div key={task._id}>
                                    <Draggable key={task._id} task={{id: task._id, taskName: task.title, type: name, content: task.content, category_id: id}} ></Draggable>
                                  </div>
  
          })

          return toReturn;
        }
        else{

          return []
        }
        
      
    }
  );

  const toggleNewVisible = () => {

    setNewVisible(!newVisible);

  }

  const toggleStateValue = (setFunc: React.Dispatch<React.SetStateAction<any>>, currentState: boolean) => {

    setFunc(!currentState)

  }

  /*  eslint-disable-next-line  no-unused-vars*/
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: object) => {


    setFunc((CurrentState: object) => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))

    e.preventDefault();

    
}

const clearState = (setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: object) => {

  Object.keys(CurrentState).forEach( (stateProp) => {

      setFunc((CurrentState: object) => ({...CurrentState, [stateProp]: ""}))

    }

  )

}

  const onCreate = () => {

    try{

        
        if(project.project_id && id && newTaskContent.content && newTaskContent.title){
          
            dispatch(getCreateTask({ project_id: project.project_id, category_id: id, content: newTaskContent.content, title: newTaskContent.title }));

            clearState(setNewTaskContent, newTaskContent);

            toggleNewVisible();
          }
          else{
            
            return
        }

      }
      catch(err){

        console.error(err)
      }

  }

  const onEditCategory = () => {

    try{

        
        if(project.project_id && id && editTitle.title){
          
            dispatch(getEditCategory({ project_id: project.project_id, category_id: id, title: editTitle.title }));


            editVisible && toggleStateValue(setEditVisible, editVisible);
          }
          else{
            
            return
        }

      }
      catch(err){

        console.error(err)
      }

  }

  const onDelete = () => {

    const body = {

      project_id: project.project_id, 
      category_id: id 

    }

    /*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^(_|action)" }]*/
    dispatch(getDeleteCategory(body))

  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {

    e.stopPropagation();
    
    e.dataTransfer.setData("component_type", "category");
    e.dataTransfer.setData("category_id", id);
    e.dataTransfer.setData("original_index", category.index.toString());

}



const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault();
    e.stopPropagation();

    const component_type = e.dataTransfer.getData("component_type");
    
    if(component_type === "category"){

      const category_id = e.dataTransfer.getData("category_id");
      const original_index = parseInt(e.dataTransfer.getData("original_index"));
      const target_index = e.currentTarget.getAttribute("data-index")? parseInt(e.currentTarget.getAttribute("data-index") as string) : null;
      
      dispatch(getChangeCategoryOrder({ project_id: project.project_id, category_id: category_id, original_index: original_index, target_index: target_index }));

    }else{

      const task_id = e.dataTransfer.getData("id")
      const old_cat_id = e.dataTransfer.getData("category_id");
      const target_category_id =  e.currentTarget.getAttribute("data-id")
      const original_index = parseInt(e.dataTransfer.getData("original_index"));
  
      dispatch(getChangeType({ project_id: project.project_id, task_id: task_id, category_id: old_cat_id, target_category_id: target_category_id, original_index: original_index }));
  
      return
    }

  };


  return (
    
    <Container
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e)}
      >

      <Container className={'drag-drop-zone'}
        // data-name = {name}
        // data-id= {id}
        // data-index= {category.index}
        // draggable
        // onDrop={e => handleDrop(e)}
        // onDragOver={e => handleDragOver(e)}
        // onDragEnter={e => handleDragEnter(e)}
        // onDragLeave={e => handleDragLeave(e)}
        >
          <div
            data-name = {name}
            data-id= {id}
            data-index= {category.index}
            draggable
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
          >
          <TopBar>
            <Close_Icon clicked={() => toggleStateValue(setDeleteVisible, deleteVisible)} title={"Delete Categoy"}></Close_Icon>
            <Plus_Icon clicked={() => toggleStateValue(setNewVisible, newVisible)} title={"Create New Task"}></Plus_Icon>
            <Edit_Icon clicked={() => toggleStateValue(setEditVisible, editVisible)} title={"Edit Category"}></Edit_Icon>
          </TopBar>
          {
            editVisible 
            ?
            <CreateNewPrompt>
              <Input name="title" onChange={(e) => onInputChange(e, setEditTitle, editTitle)} value={`${editTitle.title}`}></Input>
              <ButtonContainer>

                <PrimaryButton onClick={() => onEditCategory()} >Save</PrimaryButton>
                <RedButton onClick={() => toggleStateValue(setEditVisible, editVisible)}>Cancel</RedButton>

              </ButtonContainer>
            </CreateNewPrompt>
            :
            <CategoryTitle>{category.title}</CategoryTitle>
          }
          {
            deleteVisible 
            ?
            <CreateNewPrompt>
              <p>Delete Category?</p>
              <ButtonContainer>

                <PrimaryButton onClick={() => onDelete()} >Delete</PrimaryButton>
                <RedButton onClick={() => toggleStateValue(setDeleteVisible, deleteVisible)}>Cancel</RedButton>

              </ButtonContainer>
            </CreateNewPrompt>
            :
            ""
          }

          {
              newVisible && 
              <CreateBox>
        
                <Input name="title" onChange={(e) => onInputChange(e, setNewTaskContent, newTaskContent)} type="text" value={newTaskContent.title}></Input>

                <TextArea name="content" onChange={(e) => onInputChange(e, setNewTaskContent, newTaskContent)} value={newTaskContent.content} ></TextArea>

                <ButtonContainer>

                  <PrimaryButton onClick={() => onCreate() }>Save</PrimaryButton>
                  <RedButton onClick={() => toggleStateValue(setNewVisible, newVisible)} >Cancel</RedButton>
                        
                </ButtonContainer>
              </CreateBox>
          }
          </div>
          <div>

          {
            tasks
          }
          </div>
      </Container>
    </Container>
  );
};
export default DragAndDrop;