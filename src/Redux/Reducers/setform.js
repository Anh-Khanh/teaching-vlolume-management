import { SET_FORM } from "../Constant/index";

export default function SetForm(state = {form:"Info webpart"}, action) {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: state.form
      };
    default:
      return state;
  }
};
