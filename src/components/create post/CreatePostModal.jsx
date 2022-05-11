import classes from "./createPostModal.module.css";
import { useState } from "react";
import { addPost } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { toast } from "react-toastify";
const CreatePostModal = ({ setShowModal }) => {
  const [post, setPost] = useState({ content: "" });
  const [isPollActive,setisPollActive] = useState(false);
  const [poll,setPoll]=useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setPost({ content: e.target.value });
  };
  const postHandler = async () => {
    try {
      const fileInput = imageRef.current?.files[0];
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
      const pollObject={
        question: poll.question,
        resData:[{text:poll.answerA,votes:0},{text:poll.answerB,votes:0}]}
      const userPost = {
        ...post,
        poll:pollObject,
        image: imageUrl,
      };
      setShowModal();
      dispatch(addPost(userPost));
      toast.success("Post created");
    } catch (error) {
      console.log(error);
    }
  };
  const pollHandler=(e)=>{
    const {name,value} = e.target;
    setPoll({
      ...poll,
      [name]:value
    })
  }
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-white">Create Post</h3>
       {!isPollActive && <textarea
          className={classes["text-area"]}
          name="post"
          placeholder="What's the buzz?"
          onChange={changeHandler}
        ></textarea>}
        {!isPollActive && <label className={classes["image-upload"]} htmlFor="image">
          <i className="fas fa-camera text-white"></i>
          <input
            ref={imageRef}
            name="avatar"
            type="file"
            id="image"
            accept="image/png, image/jpeg, image/webp"
          />
        </label>}
        {isPollActive && <div style={{display:"flex",flexDirection:"column",color:"white"}}>
          <label htmlFor="question">
            <span>Question</span>
            <input type="text" name="question"  onChange={pollHandler}/>
          </label>
          <label htmlFor="answerA">
            <span>Choice 1</span>
            <input type="text" name="answerA" onChange={pollHandler}/>
          </label>
          <label htmlFor="answerB">
            <span>Choice 2</span>
            <input type="text" name="answerB" onChange={pollHandler} />
          </label>
          
          </div>}
        <i class="fas fa-poll text-white" onClick={()=>setisPollActive(true)} style={{fontSize:"2rem"}}></i>
        <button className="btn btn-primary" onClick={postHandler}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
