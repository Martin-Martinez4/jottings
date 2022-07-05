
export function requestLogin(body: any){
    /*
        Body:{
            "title",
            "category_id",
            "project_id",
        }
    */
    return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signin`, {

        
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


