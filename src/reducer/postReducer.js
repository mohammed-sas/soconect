const postReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        posts: payload,
      };
    case "ALL_POST":
      return {
        ...state,
        posts: payload,
      };
    case "CLEAR":
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};

export { postReducer };
