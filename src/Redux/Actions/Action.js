import { QUS, USER } from "./ActionType";
 function userfuntion(data){
    return{
        type:USER,
        payload:data
    }
}
 function jsondatafunction(data){
    return{
        type:QUS,
        payload:data
    }
}
const functiosnss={
    jsondatafunction,userfuntion
}
export default functiosnss;