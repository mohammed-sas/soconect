const postReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export { postReducer };
