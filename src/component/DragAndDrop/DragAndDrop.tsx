
import React, { FC, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChangeType ,ChangeType } from '../../actions/taskSlice';
import DataContext from '../../context/DataContext';
import { DragAndDropProps, Task } from '../../types/draggableTypes';
import "./dragAndDrop.css"


const DragAndDrop: FC<DragAndDropProps> = ({ id, name, draggables }) => {

  const project = useSelector(state => state.project.project._id)

  // const { data, setData } = useContext(DataContext);

  const dispatch = useDispatch();

  useEffect(() => {}, [project])
    

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
    

    // if(data && setData && e.currentTarget.getAttribute("data-name")){

      // console.log(data)

      // const oldObject = data[e.dataTransfer.getData("id")]
      // console.log(oldObject)
      // const id = e.dataTransfer.getData("id");
      // console.log(id)
      // const newObject = {...oldObject, ["type"]:  e.currentTarget.getAttribute("data-name")}
      
      const id = e.dataTransfer.getData("id");
      const old_cat_id = e.dataTransfer.getData("category_id");
      console.log("task_id: ",id)
      console.log(project)
      const newType =  e.currentTarget.getAttribute("data-name")
      const cat_id =  e.currentTarget.getAttribute("data-id")

      console.log("category_id: ",cat_id)

      // setData(prev =>( { ...prev, [e.dataTransfer.getData("id")]: newObject as Task }))

      dispatch(getChangeType({ project_id: project, task_id: id, category_id: old_cat_id, target_category_id: cat_id }));
    // }


   
  
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
          <h3>{name}</h3>
          {draggables}
    </div>
    </div>
  );
};
export default DragAndDrop;