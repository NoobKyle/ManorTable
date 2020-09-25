import Produce from 'immer';

const initial_state = {
   list: { day: 1,
         p1: 'ASSEMBLY',
         p2: 'Business Studies',
         p3: 'Business Studies',
         p4: 'Mathematics',
         p5: 'English',
         p6: 'Afikaans',
         p7: 'English',
         p8: 'IT',
         p9: 'Physics',
        },
   current: {
       subject: '',
       period: 1,
       day: 6,
       upnext: ''
   },
   calendar:{
     d3:  { day: 1,
           p1: 'Refresh',
           p2: 'Refresh',
           p3: 'Refresh',
           p4: 'Refresh',
           p5: 'Refresh',
           p6: 'Refresh',
           p7: 'Refresh',
           p8: 'Refresh',
           p9: 'Refresh',
          }
   }
}



export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'PERIOD_UPDATE':
                switch( action.payload ){
                    case 1:
                        draft.current.subject = draft.list.p1
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p2
                        break
                    case 2:
                        draft.current.subject = draft.list.p2
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p3
                        break
                    case 3:
                        draft.current.subject = draft.list.p3
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p4
                        break
                    case 4:
                        draft.current.subject = draft.list.p4
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p5
                        break
                    case 5:
                        draft.current.subject = draft.list.p5
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p6
                        break
                    case 6:
                        draft.current.subject = draft.list.p6
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p7
                        break
                    case 7:
                        draft.current.subject = draft.list.p7
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p8
                        break
                    case 8:
                        draft.current.subject = draft.list.p8
                        draft.current.period = action.payload
                        draft.current.upnext = draft.list.p7
                        break
                    case 9:
                        draft.current.subject = draft.list.p9
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
