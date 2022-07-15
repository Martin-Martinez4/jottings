
  export const toggleState = (setFunc: React.Dispatch<React.SetStateAction<any>>, currentState: boolean, e?:any) => {

    if(e){

      e.preventDefault();
      e.stopPropagation();
    }


    setFunc(!currentState);

  }

