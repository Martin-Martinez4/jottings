
export function requestCreateCategory(body){
    /*
        Body:{
            "title",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
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

export function requestDeleteCategory(body){
    /*
        Body:{
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
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

export function requestEditCategory(body){
    /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/`, {

        
        method: "post",
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


