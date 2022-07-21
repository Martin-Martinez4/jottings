
import { ErrorWithStatusCode } from "../types/customError.type";
import { ResponseClass } from "../types/responseClass.types";
import { AuthErrorMessages } from "../types/errorMessage.types";

export function processServerResponse(createTaskRespone: ResponseClass){

    const processedResponse = createTaskRespone.response.then(responses =>  {

        if(responses.status !== 201){

            const error:Partial<ErrorWithStatusCode> = responses.status === 403 ?  new Error(AuthErrorMessages.GENERIC_AUTH_ERROR) : new Error(`${createTaskRespone.defaultErrorMessage}`)

            error.statusCode = responses.status;

            throw error;
        }
        
        // Need to clone the response or else you get a stream already read error
        return responses.clone().json();
    })
    .catch(err => {

            return {isError: true, message: err.message, statusCode: err.statusCode}
    });


    return processedResponse
}


