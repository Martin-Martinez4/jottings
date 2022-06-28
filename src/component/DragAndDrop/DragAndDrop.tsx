
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import { getChangeType } from '../../actions/taskSlice';
import { getChangeType, getCreateTask, getEditCategory, getDeleteCategory, getChangeCategoryOrder } from '../../actions/projectSlice';
import Draggable from '../Draggables/Draggable';
import { DragAndDropProps, Task } from '../../types/draggableTypes';
import Plus_Icon from '../Svg_Icons/Plus_Icon/Plus_Icon';
import Edit_Icon from '../Svg_Icons/Edit_Icon/Edit_Icon';
import Close_Icon from '../Svg_Icons/Close_Icon/Close_Icon';
import "./dragAndDrop.css"
import { JsxElement } from 'typescript';


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
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {

    e.stopPropagation();
    
    e.dataTransfer.setData("component_type", "category");
    e.dataTransfer.setData("category_id", id);
    e.dataTransfer.setData("original_index", category.index);

}



const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault();
    e.stopPropagation();

    const component_type = e.dataTransfer.getData("component_type");
    
    const id = e.dataTransfer.getData("id");

    if(component_type === "category"){

      // const project_id = req.body.project_id;
      // const category_id = req.body.category_id;

      const category_id = e.dataTransfer.getData("category_id");
      const original_index = e.dataTransfer.getData("original_index");
      const target_index = e.currentTarget.getAttribute("data-index");

      dispatch(getChangeCategoryOrder({ project_id: project.project_id, category_id: category_id, original_index: original_index, target_index: target_index }));

    }else{

      const task_id = e.dataTransfer.getData("id")
      const old_cat_id = e.dataTransfer.getData("category_id");
      const newType =  e.currentTarget.getAttribute("data-name")
      const target_category_id =  e.currentTarget.getAttribute("data-id")

      console.log({ project_id: project.project_id, task_id: task_id, category_id: old_cat_id, target_category_id: target_category_id })
  
      dispatch(getChangeType({ project_id: project.project_id, task_id: task_id, category_id: old_cat_id, target_category_id: target_category_id }));
  
      return
    }

  };


  return (
    
    <div 
      className={'drag-drop-container'}
      onDragStart={(e) => handleDragStart(e)}
      >

      <div className={'drag-drop-zone'}
        data-name = {name}
        data-id= {id}
        data-index= {category.index}
        draggable
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