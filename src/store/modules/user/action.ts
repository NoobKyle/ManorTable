export function Auth( name:any, day: number, authed: boolean){
    return {
        type: "AUTH",
        payload: { username:name, day:day, authed:authed }
    };
}
