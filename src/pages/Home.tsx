
import React, { ReactElement, useEffect, useState, useContext } from 'react';

import { Task } from '../types/draggableTypes';

import { useSelector } from 'react-redux';

import DragAndDrop from '../component/DragAndDrop/DragAndDrop';
import Draggable from '../component/Draggables/Draggable';
import DataContext from '../context/DataContext';

import {DataType} from "../types/dataType";


const Home = () => {
    
    const project = useSelector(state => state.project)


    const [ taskArrays, setTaskArray ] = useState<{[key: string]: ReactElement<any, string>[]}>({})
    
  
    return(
        <div>
            {
              project?.project?.category.map((object) => {

                const tasks = object.tasks.map((task) => {
                  return (
                    <div key={task._id}>
                  <Draggable key={task._id} task={{id: task._id, taskName: task.title, type: object.title, content: task.content, category_id: object._id}} ></Draggable>
                  </div>)

                })

                return (<div key={`id_${object._id}`}>
                  <DragAndDrop  id={object._id} name={object.title} draggables={tasks}></DragAndDrop>
                  {/* {key[1]} */}
                  </div>)

              })
            }
        </div>
    )


}

export default Home;

