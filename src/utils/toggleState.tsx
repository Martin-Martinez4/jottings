import React from "react";

  export const toggleState = (setFunc: React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean, e?: React.MouseEvent<any> ) => {

    if(e){

      e.preventDefault();
      e.stopPropagation();
    }


    setFunc(!currentState);

  }

