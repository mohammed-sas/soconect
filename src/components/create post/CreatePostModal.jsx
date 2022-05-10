import classes from "./createPostModal.module.css";
import { useState } from "react";
import { addPost } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
import { useRef } from "react";
const CreatePostModal = ({ setShowModal }) => {
  const [post, setPost] = useState({ content: "" });
  const imageRef = useRef();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setPost({ content: e.target.value });
  };
  const postHandler = async () => {
    try {
      const fileInput = imageRef.current.files[0];
      let imageUrl = "";
      if (fileInput) {
        const formData = new FormData();
        formData.append("file", fileInput);
        formData.append("upload_preset", "gomh4n5e");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dx1vtnzy6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        imageUrl = data.url;
      }
      const userPost = {
        ...post,
        image: imageUrl,
      };
      dispatch(addPost(userPost));
      setShowModal();
    } catch (error) {
      console.log(error);
    }
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
        <label className={classes["image-upload"]} htmlFor="image">
          <i className="fas fa-camera text-white"></i>
          <input
            ref={imageRef}
            name="avatar"
            type="file"
            id="image"
            accept="image/png, image/jpeg, image/webp"
          />
        </label>

        <button className="btn btn-primary" onClick={postHandler}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
