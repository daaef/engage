const initialState = {
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'loading':
      return action.payload;
    default:
      return state;
  }
}