export function addIntrest(inputString:String){
    return {
        type: "intrests/ADD",
        payload: inputString
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