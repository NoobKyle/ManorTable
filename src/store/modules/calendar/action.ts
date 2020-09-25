import { Dispatch } from 'redux'
import axios from 'axios'


export function periodUpdate( input:any ){
    return {
        type: "PERIOD_UPDATE",
        payload: input
    };
}

export function dayUpdate( input:number ){
  return {
    type: "DAY_UPDATE",
    payload: input
  }
}

export const GetCalendar = ( username:any, day:any ) => {
    return ( dispatch:Dispatch ) => {

        axios.get(`https://us-central1-manortable.cloudfunctions.net/app/${username}`)
        .then(res => {
            const data = res.data;

            dispatch({
                type: "GET_CALENDAR",
                data: data,
                day: day
            });

            dispatch({
              type: "DAY_UPDATE",
              day: day
            })
        })
    };
};
