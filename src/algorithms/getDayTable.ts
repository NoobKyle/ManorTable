 export default class Algo{

    // get the current time and assign subject
    getTime(){
        let today = new Date(),
     
        time = today.getHours();
        return time
    }

    getPeriod( time:number ){
        let periodTimes = {
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

        
        for (let [key, value] of Object.entries( periodTimes)) {
            if ( time == value ){
                return key
            }
        }
    }

    getSubject( calendar:any, period:string ){

        for (let [key, value] of Object.entries( calendar)) {
            if ( period == key ){
                return value
            }
        }
    }

}
