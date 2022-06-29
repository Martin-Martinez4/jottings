
export function requestGetOneProject(project_id: string){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/project/${project_id}`, {
        
        method: "get",
        headers: { "Content-Type": "application/json"},
       
        
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}

