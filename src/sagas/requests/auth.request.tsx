
export function requestLogin(body: any){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signin`, {
        
        method: "put",
        credentials:'include',
        cache:'no-cache',
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

export function requestUser(){
    
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/`, {
        
        method: "get",
        credentials:'include',
        cache:'no-cache',
        headers: { "Content-Type": "application/json"},
       
    })
    .then(responses =>  {
        
            return responses.json()
        })
        .catch(err => {
    
            return "NA"
        });
}


