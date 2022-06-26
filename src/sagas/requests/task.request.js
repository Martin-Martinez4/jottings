

export function requestChangeType(body){

    if(body.category_id === body.target_category_id){

        return "NA"
    }
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/task`, {
        
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}

export function requestDeleteTask(body){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "delete",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}

export function requestCreateTask(body){

    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/`, {
        
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}

export function requestEditTask(body){
    /*
        Body:{
            "content",
            "title",
            "badges",
            "category_id",
            "project_id",
            "task_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/task/update`, {

        
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}



