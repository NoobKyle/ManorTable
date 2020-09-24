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

export const GetUsers = () => {
    console.log("GetUsers");

    return ( dispatch:Dispatch ) => {
        console.log("GetUsers dispatch");

        axios.get(`https://us-central1-manortable.cloudfunctions.net/app/users`)
        .then(res => {
            const persons = res.data;

            dispatch({
                type: "GET_USERS",
                users: persons
            });
        })
    };
};
