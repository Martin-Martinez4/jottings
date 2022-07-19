
import React, { FC, ReactElement, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onInputChange } from '../../utils/onInputChange';
import { toggleState } from '../../utils/toggleState';

import { getChangeType, getEditCategory, getDeleteCategory, getChangeCategoryOrder } from '../../actions/projectSlice';
import { Container, TopBar, CategoryTitle, DropDownParent, DropDownContainer } from "./dragAndDrop.styles";
import { Input, ButtonContainer, PrimaryButton, RedButton, ThinnerShorterPromptContainer} from '../../global.style';
import Draggable from '../Draggables/Draggable';
import { DragAndDropProps } from '../../types/draggableTypes';

import PlusIcon from '../Svg_Icons/PlusIcon/PlusIcon';
import EditIcon from '../Svg_Icons/EditIcon/EditIcon';
import CloseIcon from '../Svg_Icons/CloseIcon/CloseIcon';
import MoveIcon from '../Svg_Icons/MoveIcon/MoveIcon';

import { PromptContainer } from '../../global.style';
import Circles from '../Svg_Icons/LoadingIcons/Circles';

import { StateType } from '../../types/state.type';
import ModalHOC from '../ModalHOC/ModalHOC';

const CreateTaskPrompt = React.lazy(() => (import('../CreateTaskPrompt/CreateTaskPrompt')));

const DragAndDrop: FC<DragAndDropProps> = ({ id, name, dropDownCategories }) => {

  const dispatch = useDispatch();

  const [newVisible, setNewVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const [editTitle, setEditTitle] = useState({title: name});


  const [ menuVisible, setMenuVisible ] = useState(false);

  const [ targetIndex, setTargetindex] = useState({  targetIndex: undefined });

  const project = useSelector((state: StateType) => state.project.project)

  const category = useSelector((state: StateType) => state.project.categories[id])
  
  const tasks = useSelector((state: StateType) => 
    {
        const tasks = state.project.tasks[id]
      
        let toReturn: ReactElement<any, any>[] = []

        if(tasks){


          Object.keys(tasks)?.forEach((task_id) => {
  
            const task = tasks[task_id]

            // toReturn[category.length - task.index] To disaplay the tasks in revese order
            // Adding to the end of an array is faster but user usually want the new task to be on top so the order of the tasks in a category is reversed to have fast inserts and the desired UX
            toReturn[category.length - task.index] = <div key={task._id}>
                                    <Draggable key={task._id} task={{id: task._id, taskName: task.title, type: name, content: task.content, category_id: id}} dropDownCategories={dropDownCategories}></Draggable>
                                  </div>
  
          })

          return toReturn;
        }
        else{

          return []
        }
        
      
    }
  );

  const onEditCategory = () => {

    try{

        
        if(project.project_id && id && editTitle.title){
          
            dispatch(getEditCategory({ project_id: project.project_id, category_id: id, title: editTitle.title }));


            editVisible && toggleState(setEditVisible, editVisible);
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


  const changeCategoryOrderBYButton = () => {

    console.log(targetIndex.targetIndex)

    if(targetIndex){

      dispatch(getChangeCategoryOrder({ project_id: project.project_id, category_id: id, original_index: category.index, target_index: targetIndex.targetIndex }));
    }
    else{

      return
    }


  }

 
  return (

    <>
      <ModalHOC visible={editVisible}>
          <ThinnerShorterPromptContainer>
              <Input name="title" onChange={(e) => onInputChange(e, setEditTitle, editTitle)} value={`${editTitle.title}`}></Input>
              <ButtonContainer>

                <PrimaryButton onClick={() => onEditCategory()} >Save</PrimaryButton>
                <RedButton onClick={() => toggleState(setEditVisible, editVisible)}>Cancel</RedButton>

              </ButtonContainer>
            </ThinnerShorterPromptContainer>
      </ModalHOC>

      <ModalHOC visible={deleteVisible}>
          <ThinnerShorterPromptContainer>
              <p>Delete Category {category.title}?</p>
              <ButtonContainer>

                <PrimaryButton onClick={() => onDelete()} >Delete</PrimaryButton>
                <RedButton onClick={() => toggleState(setDeleteVisible, deleteVisible)}>Cancel</RedButton>

              </ButtonContainer>
          </ThinnerShorterPromptContainer>
      </ModalHOC>

      <ModalHOC visible={newVisible}>
          <Suspense fallback={<PromptContainer><Circles></Circles></PromptContainer>}>
              <CreateTaskPrompt project_id={project.project_id} category_id={id} clickConfirm={() => toggleState(setNewVisible, newVisible)} clickCancel={() => toggleState(setNewVisible, newVisible)} ></CreateTaskPrompt>
          </Suspense>
       
      </ModalHOC>

      <ModalHOC visible={menuVisible}>

          <ThinnerShorterPromptContainer>
            <p>Pick an index between 0 and {project.length -1}</p>
            <div style={{ display: "flex", justifyContent: "space-around",  }}>

              <Input type="number"  min="1" max="50" width="3.5rem" name="targetIndex" onChange={(e) => onInputChange(e, setTargetindex, targetIndex) }></Input>
            </div>
            <ButtonContainer style={{ display: "flex", justifyContent: "center",  }}>
                <PrimaryButton onClick={() => changeCategoryOrderBYButton()}>Confirm</PrimaryButton>
                <RedButton onClick={() => toggleState(setMenuVisible, menuVisible)}>Cancel</RedButton>
            </ButtonContainer>

          </ThinnerShorterPromptContainer>
       
      </ModalHOC>
    
    <Container
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e)}>

      <Container className={'drag-drop-zone'}>
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
            <CloseIcon clicked={() => toggleState(setDeleteVisible, deleteVisible)} title={"Delete Categoy"}></CloseIcon>
            <PlusIcon clicked={() => toggleState(setNewVisible, newVisible)} title={"Create New Task"}></PlusIcon>
            <EditIcon clicked={() => toggleState(setEditVisible, editVisible)} title={"Edit Category"}></EditIcon>

            <MoveIcon clicked={() => toggleState(setMenuVisible, menuVisible)} title={"Move Category"}></MoveIcon>

          </TopBar>
          
            <CategoryTitle>{category.title}</CategoryTitle>

    
          </div>
          <div>

          {
            tasks
          }
          </div>
      </Container>
    </Container>
    </>
  );
};
export default DragAndDrop;