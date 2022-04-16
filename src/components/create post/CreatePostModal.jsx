import classes from "./createPostModal.module.css";
import { useState } from "react";
import { usePost } from "../../context";

const CreatePostModal = ({ setShowModal }) => {
  const [post, setPost] = useState({ content: "" });
  const { addPost } = usePost();
  const changeHandler = (e) => {
    setPost({ content: e.target.value });
  };
  const postHandler = async () => {
    try {
      await addPost(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          class={`fas fa-times text-primary ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-primary">Create Post</h3>
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
