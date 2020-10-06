export function Auth( name:any, day: any, authed: boolean){
    return {
        type: "AUTH",
        payload: { username:name, day:day, authed:authed }
    };
}

export function CheckAuth(){
    return {
        type: 'checkAuth'
    }
}
