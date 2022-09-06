const initialState = {
  count: 1,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default AppReducer;
