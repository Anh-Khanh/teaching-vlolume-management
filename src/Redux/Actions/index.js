import { SET_FORM } from "../Constant/index";
export const ShowForm = (payload) => {
  return {
    type: SET_FORM,
    payload,
  };
};
