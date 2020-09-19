export function periodUpdate(input:number){
    return {
        type: "period/UPDATE",
        payload: input
    };
}

export function removeIntrest(inputPosition: Number){
    return {
        type: "intrests/REMOVE",
        payload: inputPosition
    };
}

export function calendarUpdate(){
    return {
        type: 'calendar/UPDATE'
    }
}