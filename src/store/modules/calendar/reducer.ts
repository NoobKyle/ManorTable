import Produce from 'immer';

const initial_state = {
   current: {
       subject: '',
       period: 1,
       day: 6,
       upnext: ''
   },
   calendar:{
    userData: ['refresh']
   }
}



export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'PERIOD_UPDATE':
                switch( action.payload ){
                    case 1:
                        draft.current.subject = draft.calendar.userData[0]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[1]
                        break
                    case 2:
                        draft.current.subject = draft.calendar.userData[1]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[2]
                        break
                    case 3:
                        draft.current.subject = draft.calendar.userData[2]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[3]
                        break
                    case 4:
                        draft.current.subject = draft.calendar.userData[3]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[4]
                        break
                    case 5:
                        draft.current.subject = draft.calendar.userData[4]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[5]
                        break
                    case 6:
                        draft.current.subject = draft.calendar.userData[5]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[6]
                        break
                    case 7:
                        draft.current.subject = draft.calendar.userData[6]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[7]
                        break
                    case 8:
                        draft.current.subject = draft.calendar.userData[7]
                        draft.current.period = action.payload
                        draft.current.upnext = draft.calendar.userData[8]
                        break
                    case 9:
                        draft.current.subject = draft.calendar.userData[8]
                        draft.current.period = action.payload
                        draft.current.upnext = 'After School'
                        break
                    default:
                        draft.current.subject = '---'
                        draft.current.period = 0
                        draft.current.upnext = 'click refresh button in settings'
                }
                break

            case 'GET_CALENDAR':
                draft.calendar = action.data[0]
                draft.current.day = action.day
                break


            default:
        }
    })
}
