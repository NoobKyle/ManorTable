export function addIntrest(inputString:String){
    return {
        type: "intrests/ADD",
        payload: inputString
    };
}

export function getDay(){
    return {
        type: 'calendar/GetDay'
    }
}