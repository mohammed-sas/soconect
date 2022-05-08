import classes from "./createPostModal.module.css";
import { useState } from "react";
import { addPost } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
const CreatePostModal = ({ setShowModal }) => {
  const [post, setPost] = useState({ content: "" });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setPost({ content: e.target.value });
  };
  const postHandler = () => {
    dispatch(addPost(post));
    setShowModal();
  };

  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-white">Create Post</h3>
        <textarea
          className={classes["text-area"]}
          name="post"
          placeholder="What's the buzz?"
          onChange={changeHandler}
        ></textarea>
        <button className="btn btn-primary" onClick={postHandler}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
