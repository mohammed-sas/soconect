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
    case "EDIT":
      return {
        ...state,
        posts: payload,
      };
    case "LIKED":
      return {
        ...state,
        posts: payload,
      };
    case "UNLIKED":
      return {
        ...state,
        posts:payload
      }
    case "UPDATE":
      return{
        ...state,
        posts:payload
      }
    default:
      return state;
  }
};

export { postReducer };
