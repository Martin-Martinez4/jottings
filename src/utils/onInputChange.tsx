
export const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: object) => {


    setFunc((CurrentState: object) => ({...CurrentState, [e.target.name]: (e.target.value).toString()}))

    e.preventDefault();

    
}

