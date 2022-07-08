

// user: { 
//     email: "", 
//     username: "", 
//     projects: [], 
//     permissions: [], 
//     access_token: "", 
//     isAuth: false 
// }

export type ProjectDescriptionType = {

    [project_id: string]:{

        name: string,
        logo_url: string,
        description: string
    }

}

export type PermissionsType = {

    [project_id: string]: [string]
}

export interface AuthType {

    email: string,
    username: string,
    projects:[ProjectDescriptionType],
    permissions: PermissionsType,
    access_token: string,
    isAuth: boolean | undefined


}

