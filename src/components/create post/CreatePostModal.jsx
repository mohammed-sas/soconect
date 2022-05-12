import classes from "./createPostModal.module.css";
import { useState } from "react";
import { addPost } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { toast } from "react-toastify";
const CreatePostModal = ({ setShowModal }) => {
  const [post, setPost] = useState({ content: "" });
  const [isPollActive, setisPollActive] = useState(false);
  const [poll, setPoll] = useState(null);
  const [hashtags,setHashtags]=useState("");
  const imageRef = useRef();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setPost({ content: e.target.value });
  };
  const postHandler = async () => {
    try {
      const fileInput = imageRef.current?.files[0];
      let imageUrl = "";
      let pollObject = null;
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
      if (poll) {
        pollObject = {
          question: poll.question,
          resData: [
            { text: poll.answerA, votes: 0 },
            { text: poll.answerB, votes: 0 },
          ],
        };
      }
      const tags= hashtags.trim().toLowerCase().split(",");
      const userPost = {
        ...post,
        poll: pollObject,
        hashtags: tags,
        image: imageUrl,
      };
      setShowModal();
      dispatch(addPost(userPost));
      toast.success("Post created");
    } catch (error) {
      console.log(error);
    }
  };
  const pollHandler = (e) => {
    const { name, value } = e.target;
    setPoll({
      ...poll,
      [name]: value,
    });
  };
  const hashtagHandler=(e)=>{
    setHashtags(e.target.value);
  }
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-white">Create Post</h3>
        {!isPollActive && (
          <textarea
            className={classes["text-area"]}
            name="post"
            placeholder="What's the buzz?"
            onChange={changeHandler}
          ></textarea>
        )}

        {isPollActive && (
          <div className={classes["poll-container"]}>
            <label htmlFor="question">
              <span>Question</span>
              <input type="text" name="question" onChange={pollHandler} />
            </label>
            <label htmlFor="answerA">
              <span>Choice 1</span>
              <input type="text" name="answerA" onChange={pollHandler} />
            </label>
            <label htmlFor="answerB">
              <span>Choice 2</span>
              <input type="text" name="answerB" onChange={pollHandler} />
            </label>
          </div>
        )}
         <label htmlFor="hashtag">
           <span className="text-white">Hashtags</span>
          <textarea name="hashtag" className={classes["hashtag-text-area"]} id="hashtag" onChange={hashtagHandler}></textarea>
        </label>
        {!isPollActive && (
          <div className={classes["footer"]}>
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
            <i
              className="fas fa-poll text-white"
              onClick={() => setisPollActive(true)}
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
        )}
       
        <button className="btn btn-primary" onClick={postHandler}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
