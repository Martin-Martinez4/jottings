
import { ErrorModalContainer } from './ErrorModal.style';

import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../types/state.type';
import { getResetErrorMessage, resetErrorMessage } from '../../actions/errorAndLoadingSlice';
import { useEffect } from 'react';

const ErrorModal = () => {

    const dispatch = useDispatch();

    const error = useSelector((state: StateType) => state.errorAndLoading.error);

    useEffect(() => {

        if(error.isThereAnError){
    
            setTimeout(() => {
    
                dispatch(resetErrorMessage())
    
            }, 5000)
    
        }

    }, [])

    
    return(
        <>
            {
                error.isThereAnError
                
                ?  
                    <ErrorModalContainer>
                        { error.message }
                        <p style={{ position: "absolute", top: "-10px", right: "10px" }}>X</p>
                    </ErrorModalContainer>
                :
                ""
            }
        </>
    )
}

export default ErrorModal;