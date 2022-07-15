
import { onInputChange } from "../../utils/onInputChange";
import { clearState } from "../../utils/clearState";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCreateCategory } from "../../actions/projectSlice";
import { StateType } from "../../types/project.type";

import { ButtonContainer, Input, PrimaryButton, RedButton } from "../../global.style";
import { CreateCategoryPromptContainer } from "./CreateCategoryPrompt.styles";


interface IWithToggleModalVisible{

    toggleModalVisible: () => void;
}

const CreateCategoryPrompt: React.FC<IWithToggleModalVisible> = ({ toggleModalVisible }) => {

    const dispatch = useDispatch();
    const project = useSelector((state: StateType) => state.project.project);

    const [ newCategoryValues, setNewCategoryValues ] = useState({
        title: ""
    })


    const onCreate = () => {

        const body = {
    
            title: newCategoryValues.title,
            project_id: project.project_id,
        }
    
    
        dispatch(getCreateCategory(body))
        
        toggleModalVisible()
        
        clearState(setNewCategoryValues, newCategoryValues)
    
        return
    
      }

   
    return (
        <CreateCategoryPromptContainer>
            <Input value={newCategoryValues.title} name="title" onChange={(e) => onInputChange(e, setNewCategoryValues, newCategoryValues)}placeholder="Category Title" ></Input>
            <ButtonContainer>
                <PrimaryButton onClick={() => onCreate()}>Confirm</PrimaryButton>
                <RedButton onClick={() => toggleModalVisible()}>Cancel</RedButton>
            </ButtonContainer>
        </CreateCategoryPromptContainer>
    )

}

export default CreateCategoryPrompt;

