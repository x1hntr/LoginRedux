
export const credentialsSet = (user, pass) =>{
    return{
        type: 'SAVE',
        payload: {userName: user, password: pass}
    };
}