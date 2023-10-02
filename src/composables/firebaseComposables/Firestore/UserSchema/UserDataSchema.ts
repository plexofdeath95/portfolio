
export enum UserType
{
    admin,
    user
}

export interface UserSchema
{
    userDisplayName:string,
    userEmail:string,
    userUid:string
    userType:UserType
    userVerified:boolean
}