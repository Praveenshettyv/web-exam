import { QUS, USER } from "../Actions/ActionType";
const reducerintitaldata = {
  fetchdata: [],
};
function userreducerfunction(state = reducerintitaldata, action) {
  switch (action.type) {
    case USER:
      return { ...state, fetchdata: action.payload };
    case QUS:
      return { ...state, fetchdata: action.payload };
    default:
      return state;
  }
}
export default userreducerfunction;
