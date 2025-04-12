const initialState = {
    name: "",
  };
  
  export const SET_NAME = "SET_NAME";
  
  export const createName = (state = initialState, action) => {
    switch (action.type) {
      case SET_NAME:
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };