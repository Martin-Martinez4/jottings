
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { DataType } from "../types/dataType";

import { Task } from "../types/draggableTypes";

const TempData = {
    "1":{ 
      id: "1", 
      taskName: "task1",
      content: "This is task1",
      type: "In Progress"
    },
    "2":{ 
      id: "2", 
      taskName: "task2",
      content: "This is task2",

      type: "In Progress"
    },
    "3":{ 
      id: "3", 
      taskName: "task3",
      content: "This is task3",

      type: "Done"
    },
    "4":{ 
      id: "4", 
      taskName: "task4",
      content: "This is task4",

      type: "TEst"
    },
    "5":{ 
      id: "5", 
      taskName: "task5",
      content: "This is task5",

      type: "Test"
    },
};

type DataContextType = {

    data: DataType;
    setData:  Dispatch<SetStateAction<DataType>>;
}

type WithChildern = {

    children: ReactNode;
}
  


const DataContext = createContext<Partial<DataContextType>>({});

export const DataProvider:FC<WithChildern> = ({ children }) => {
    const [data, setData] = useState<DataType>(TempData);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;

