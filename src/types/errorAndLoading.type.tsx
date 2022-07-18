

export type ErrorType = {

    isThereAnError: boolean,
    message: string,

}

export type LoadingType = {

    isLoading: boolean,

}

export type errorAndLoadingType = {

    error: ErrorType,
    Loading: LoadingType,

}

// { error:{ isThereAnError: false, message: "" }, Loading: { isLoading: false } }


