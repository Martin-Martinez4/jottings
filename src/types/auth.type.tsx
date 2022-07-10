

// user: { 
//     email: "", 
//     username: "", 
//     projects: [], 
//     permissions: [], 
//     access_token: "", 
//     isAuth: false 
// }

export type RegisterType = {

    email: string,
    username: string,
    password: string,
    password2: string,

};

export type SigninType = {

    email: string,
    name: string,
    password: string


}

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

