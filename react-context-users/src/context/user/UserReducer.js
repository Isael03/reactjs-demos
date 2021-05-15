import { GET_PROFILE, GET_USERS } from "../types";

const reducer = function(state, action){
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
      break;
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };

      break;

    default:
        return state
      break;
  }
};
export default reducer;