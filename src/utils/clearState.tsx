
export const clearState = (setFunc: React.Dispatch<React.SetStateAction<any>>, CurrentState: object) => {

    Object.keys(CurrentState).forEach( (stateProp) => {
  
        setFunc((CurrentState: object) => ({...CurrentState, [stateProp]: ""}))
  
      }
  
    )
  
}

