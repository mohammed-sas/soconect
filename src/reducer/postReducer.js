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
    case "DELETE":
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export { postReducer };
