export interface ILoggedInUser {
    userId: number
    username: string,

}

export const defaultLoggedInUser: ILoggedInUser ={
    userId:0,
    username: "",
}

export interface IRegisterUser{
    username: string
    password: string
}

export const defaultRegisterUser: IRegisterUser ={
    username: "",
    password: ""
}

export let allUsers: IRegisterUser[] = [
    {
        username: 'Anna',
        password: 'Anna.1234',
    },
];
    