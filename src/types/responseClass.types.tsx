
export class ResponseClass{

    response: Promise<Response>;
    defaultErrorMessage: string;

    constructor(response: Promise<Response>, defaultErrorMessage: string){

        this.response = response;

        this.defaultErrorMessage = defaultErrorMessage;
    }

} 



