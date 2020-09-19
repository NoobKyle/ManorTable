import Produce from 'immer';
import firebase from 'firebase';

var name : any; 
var email : any;
var photoUrl : any;
var uid : any;
var emailVerified : any; 

function getSignedinUserInfo(){
    var user = firebase.auth().currentUser;

    if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    }
}


const initial_state = {
   list: {
       name: 'No User',
       email: 'No User Email',
       photoUrl: 'No User Photo',
       emailVerified: 'No User Email',
       uid: 'No User UID'
   },
   test: {
       name: 'No User',
       email: 'No User Email',
       photoUrl: 'No User Photo',
       emailVerified: 'No User Email',
       uid: 'No User UID'
   }
}

export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'user/UPDATE':
                getSignedinUserInfo();
                draft.list.name = name ;
                draft.list.email = email ;
                draft.list.photoUrl = photoUrl ;
                draft.list.emailVerified = emailVerified ;
                draft.list.uid = uid ;
                break;
            default:
        }
    })
} 