
import React, { ReactElement, useEffect, useState, useContext } from 'react';

import { Task } from '../types/draggableTypes';

import DragAndDrop from '../component/DragAndDrop/DragAndDrop';
import Draggable from '../component/Draggables/Draggable';
import DataContext from '../context/DataContext';


const Home = () => {

    const { data } = useContext(DataContext)

    const [ taskArrays, setTaskArray ] = useState<{[key: string]: ReactElement<any, string>[]}>({})
    
    useEffect(() => {
  
      let TemptaskArrays:{[key: string]: ReactElement<any, string>[]} = {}

      if(data){

        for (const [key, value] of Object.entries(data)){
    
            const tasktype = `${value.type}`;
    
            if(TemptaskArrays[tasktype] === undefined){
              
              TemptaskArrays = {...TemptaskArrays,  [tasktype]: [<Draggable task={{id: key, taskName: value.taskName, type: value.type, content: value.content}} ></Draggable>]}
              
              
            }
            else{
                
              TemptaskArrays = {...TemptaskArrays,  [tasktype]: [...TemptaskArrays[tasktype], <Draggable task={{id: key, taskName: value.taskName, type: value.type, content: value.content}} ></Draggable>]}
    
            }
    
      }
    
      
          setTaskArray(TemptaskArrays)
      }
  

    
    }, [data])


    return(
        <div>
            {
                Object.entries(taskArrays).map((key)=> {

                    return (<div>
                        <DragAndDrop name={key[0]} draggables={key[1]}></DragAndDrop>
                        {/* {key[1]} */}
                        </div>)
                        
                })
               
            }
        </div>
    )


}

export default Home;

