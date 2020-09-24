import { Dispatch } from 'redux'
import axios from 'axios'

export function periodUpdate(input:any){
    return {
        type: "PERIOD_UPDATE",
        payload: input
    };
}

export function calendarUpdate(){
    return {
        type: 'calendar/UPDATE'
    }
}

export const GetCalendar = () => {
    return ( dispatch:Dispatch ) => {

        axios.get(`https://us-central1-manortable.cloudfunctions.net/app/kyle`)
        .then(res => {
            const person = res.data;

            dispatch({
                type: "GET_CALENDAR",
                users: person
            });
        })
    };
};
