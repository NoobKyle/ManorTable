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

                localStorage.setItem('authed', action.payload.authed.toString());
                localStorage.setItem('username', action.payload.username);
                localStorage.setItem('day', action.payload.day);
                break;
            case 'CheckAuth':
                console.log('Process: Checking Auth');
                const authState = localStorage.getItem('authed' || '');

                if( authState == 'true'){
                    let username = (localStorage.getItem('username') || '');
                    let day = (localStorage.getItem('day') || '');
                    let auth = (localStorage.getItem('authed') || '');

                    draft.list.username = username;
                    draft.list.day = parseInt(day);
                    draft.list.authed = JSON.parse(auth);   ;
                }
            default:
        }
    })
}
