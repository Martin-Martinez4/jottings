
import React, { FC, useContext } from 'react';
import DataContext from '../../context/DataContext';
import { DragAndDropProps, Task } from '../../types/draggableTypes';
import "./dragAndDrop.css"


const DragAndDrop: FC<DragAndDropProps> = ({ name, draggables }) => {

  const { data, setData } = useContext(DataContext);
    

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
    

    if(data && setData && e.currentTarget.getAttribute("data-name")){

      const oldObject = data[e.dataTransfer.getData("id")]
      const newObject = {...oldObject, ["type"]:  e.currentTarget.getAttribute("data-name")}

      setData(prev =>( { ...prev, [e.dataTransfer.getData("id")]: newObject as Task }))
    }


   
  
    return
  };


  return (
    
    <div className={'drag-drop-container'}>

      <div className={'drag-drop-zone'}
        data-name = {name}
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