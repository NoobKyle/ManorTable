import Produce from 'immer';

const initial_state = {
   list: [
       { day: 1,
         p1: 'ASSEMBLY',
         p2: 'Business Studies',
         p3: 'Business Studies',
         p4: 'Mathematics',
         p5: 'Engish',
         p6: 'Afikaans',
         p7: 'English',
         p8: 'IT',
         p9: 'Physics',
        }
   ],
   times: {
       p1: 8,
       p2: 9,
       p3: 10,
       p4: 11,
       p5: 12,
       p6: 13,
       p7: 14,
       p8: 15,
       p9: 16,
   }
}

export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'intrests/ADD':
                draft.list.push( action.payload);
                break
            case 'intrests/REMOVE':
                draft.list.splice( action.payload, 1)
                break
            default:
        }
    })
} 