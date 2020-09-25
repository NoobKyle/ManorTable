import Produce from 'immer';

const initial_state = {
   list: {
       username: 'noUser',
       day: 1,
       authed: false
   }
}

export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'AUTH':
                draft.list.username = action.payload.username;
                draft.list.day = action.payload.day;
                draft.list.authed = action.payload.authed;
                break;
            default:
        }
    })
}
