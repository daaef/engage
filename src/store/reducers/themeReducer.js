
const initialState = {
  light: true
};


export default (state = initialState, action) => {
  switch (action.type) {
    case "light":
      return {
        light: action.payload
      };
    default:
      return state;
  }
};