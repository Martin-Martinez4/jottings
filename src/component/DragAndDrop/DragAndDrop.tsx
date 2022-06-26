
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import { getChangeType } from '../../actions/taskSlice';
import { getChangeType, getCreateTask, getEditCategory, getDeleteCategory } from '../../actions/projectSlice';
import Draggable from '../Draggables/Draggable';
import { DragAndDropProps, Task } from '../../types/draggableTypes';
import Plus_Icon from '../Svg_Icons/Plus_Icon/Plus_Icon';
import Edit_Icon from '../Svg_Icons/Edit_Icon/Edit_Icon';
import Close_Icon from '../Svg_Icons/Close_Icon/Close_Icon';
import "./dragAndDrop.css"


const DragAndDrop: FC<DragAndDropProps> = ({ id, name, draggables }) => {

  const dispatch = useDispatch();

  const [newVisible, setNewVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editTitle, setEditTitle] = useState({title: name});
  const [newTaskContent, setNewTaskContent] = useState({

    title: "",
    content: "",

  })

  const project = useSelector(state => state.project.project)

  const category = useSelector(state => state.project.categories[id])
  
  const tasks = useSelector(state => 
    {
        const tasks = state.project.tasks[id]
        return tasks && Object.keys(tasks)?.map((task_id) => {

        const task = tasks[task_id]

        return (
          <div key={task._id}>
        <Draggable key={task._id} task={{id: task._id, taskName: task.title, type: name, content: task.content, category_id: id}} ></Draggable>
        </div>)

      })
    }
  );

  const toggleNewVisible = () => {

    setNewVisible(!newVisible);

  }

  const toggleStateValue = (setFunc, currentState) => {

    setFunc(!currentState)

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

  const onCreate = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {

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

  const onEditCategory = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {

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
  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault();
    e.stopPropagation();
    
    const id = e.dataTransfer.getData("id");
    const old_cat_id = e.dataTransfer.getData("category_id");
    const newType =  e.currentTarget.getAttribute("data-name")
    const cat_id =  e.currentTarget.getAttribute("data-id")

    dispatch(getChangeType({ project_id: project.project_id, task_id: id, category_id: old_cat_id, target_category_id: cat_id }));

    return
  };


  return (
    
    <div className={'drag-drop-container'}>

      <div className={'drag-drop-zone'}
        data-name = {name}
        data-id= {id}
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        >
          <div className="draggable-heading-top-bar">
            <Close_Icon clicked={() => onDelete()} ></Close_Icon>
            <Plus_Icon clicked={() => toggleStateValue(setNewVisible, newVisible)} ></Plus_Icon>
            <Edit_Icon clicked={() => toggleStateValue(setEditVisible, editVisible)} ></Edit_Icon>
          </div>
          {
            editVisible 
            ?
            <div>
              <input name="title" onChange={(e) => onInputChange(e, setEditTitle, editTitle)} value={`${editTitle.title}`}></input>
              <div>

                <span onClick={(e) => onEditCategory(e)} >Save</span><span>Cancel</span>
              </div>
            </div>
            :
            <h3>{category.title}</h3>
          }

          {
              newVisible && 
              <div className="create-box">
                <div className="draggable-heading-area">
                    <div className="draggable-heading-top-bar">
                      <span onClick={(e) => onCreate(e) }>Save</span>
                      <span>Cancel</span>
                    </div>
                    <input name="title" onChange={(e) => onInputChange(e, setNewTaskContent, newTaskContent)} type="text" value={newTaskContent.title}></input>

                </div>
                <div>
                    <textarea name="content" onChange={(e) => onInputChange(e, setNewTaskContent, newTaskContent)} value={newTaskContent.content} ></textarea>

                </div>
            </div>
          }
          {
            tasks
          }
      </div>
    </div>
  );
};
export default DragAndDrop;