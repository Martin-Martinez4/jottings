
import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { getCreateTask } from "../../actions/projectSlice";

import { CKEditor, CKEditorEventPayload } from 'ckeditor4-react';

import { onInputChange } from "../../utils/onInputChange";
import { clearState } from "../../utils/clearState";

import { PromptContainer, ButtonContainer, PrimaryButton, RedButton, Input, TextAreaParent } from "../../global.style";

interface IConfirmCancelButtons {

    project_id: string;
    category_id: string;

    clickConfirm: (arg0?: any) => any;
    clickCancel: (arg0?: any) => any;
    children?: Element[] | Element | JSX.Element

}

const CreateTaskPrompt: FC<IConfirmCancelButtons> = ({ project_id, category_id, clickConfirm, clickCancel }) => {

    const dispatch = useDispatch();

    const [newTaskContent, setNewTaskContent] = useState({

        title: "",
        content: "",
    
    })

    const onCreate = () => {

        try{
    
            
            if(project_id && category_id && newTaskContent.content && newTaskContent.title){
              
                dispatch(getCreateTask({ project_id: project_id, category_id: category_id, content: newTaskContent.content, title: newTaskContent.title }));
    
                clearState(setNewTaskContent, newTaskContent);
    
                clickConfirm()
              }
              else{
                
                return
            }
    
          }
          catch(err){
    
            console.error(err)
          }
    
      }

    const inputHandler = (e: CKEditorEventPayload<"change">) => {

        setNewTaskContent(state => ({...state, "content": e.editor.getData()}));

    
    };

    return(

        <PromptContainer>
          <p>Create Task</p>
          <Input name="title" placeholder="Title" onChange={(e) => onInputChange(e, setNewTaskContent, newTaskContent)} type="text" value={newTaskContent.title} width="72%"></Input>

          <TextAreaParent height="auto" >
                <CKEditor 
                    onChange={(e) => inputHandler(e)}
                    type="classic"
                    config={{
                        extraPlugins: "editorplaceholder",
                        editorplaceholder: "Task Body",
                        toolbar: [
                            ['Table'],
                            [ 'Format', 'Font', 'FontSize' ],
                            [ 'Bold', 'Italic' ],
                            ['BulletedList', 'NumberedList'], 
                            [ 'Undo', 'Redo' ],
                
                        ],
                        width: '75%',
                    
                    }} 
                />
                </TextAreaParent>

          <ButtonContainer>

            <PrimaryButton onClick={() => onCreate() }>Save</PrimaryButton>
            <RedButton onClick={() => clickCancel()} >Cancel</RedButton>
                  
          </ButtonContainer>
        </PromptContainer>
    )

}

export default CreateTaskPrompt;

