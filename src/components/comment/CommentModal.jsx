import { useState } from "react";
import { addComment } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
import classes from "./../create post/createPostModal.module.css";

const CommentModal = ({ post, setShowCommentModal }) => {
  const [comment, setComment] = useState({ content: "" });
  const dispatch = useDispatch();

  const commentHandler = () => {
      dispatch(addComment({comment, postId:post._id}));
      setShowCommentModal();

  };
  const changeHandler = (e) => {
    setComment({
      content: e.target.value,
    });
  };

  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowCommentModal}
        ></i>
        <h3 className="text-white">Comment on Post</h3>
        <textarea
          className={classes["text-area"]}
          name="post"
          placeholder="Add your comments"
          onChange={changeHandler}
        ></textarea>
        <button className="btn btn-primary" onClick={commentHandler}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentModal;
