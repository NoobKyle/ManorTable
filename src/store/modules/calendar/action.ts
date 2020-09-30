import { Dispatch } from 'redux'
import axios from 'axios'


export function periodUpdate( input:any ){
    return {
        type: "PERIOD_UPDATE",
        payload: input
    };
}


export const GetCalendar = ( username:any, day:any ) => {
    return ( dispatch:Dispatch ) => {

        let offlineCalendar:any =  JSON.parse(localStorage.getItem('calendar') || '["noCalendar"]');
        var data

        if( offlineCalendar[0] != 'noCalendar' ){
            console.log('offlineCalendar exists');
            dispatch({
                type: "GET_CALENDAR",
                data: offlineCalendar,
                day: day
            });
        }else{
            console.log('fetching calendar')
            axios.get(`https://us-central1-manortable.cloudfunctions.net/app/${username}?day=d${day}`)
            .then(res => {
                data = res.data;

            dispatch({
                type: "GET_CALENDAR",
                data: data,
                day: day
                });

            console.log('adding calendar to localStorage');
            localStorage.setItem('calendar', JSON.stringify(data));

            })
        };
    };
}
