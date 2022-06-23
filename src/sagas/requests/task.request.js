

export function requestChangeType(body){

    console.log(body)

    
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
