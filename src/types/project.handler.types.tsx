
export type HandleCreateProjectPayloadType = {

    title: string,
    description: number,
    logo_url: string,

}

export type HandleDeleteProjectPayloadType = {

    project_id: string

}

export type HandleCreateProjectType = {

    type: string,
    payload: HandleCreateProjectPayloadType

}
export type HandleDeleteProjectType = {

    type: string,
    payload: HandleDeleteProjectPayloadType

}

