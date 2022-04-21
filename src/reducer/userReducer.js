const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: payload,
      };
    case "DELETE_BOOKMARK":
      return {
        ...state,
        bookmarks: payload,
      };
    case "FOLLOWING":
      return{
        ...state,
        following:payload
      }
    case "UNFOLLOWING":
        return{
          ...state,
          following:payload
        }
    default:
      return state;
  }
};

export { userReducer };
