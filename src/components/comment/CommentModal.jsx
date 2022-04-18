import { useState } from 'react';
import { usePost } from '../../context';
import classes from './../create post/createPostModal.module.css';

const CommentModal = ({post,setShowCommentModal}) => {
    const [comment,setComment]=useState({content:""});
    const {addComment} = usePost();

    const commentHandler=async ()=>{
        try{
            await addComment(comment,post._id);
            setShowCommentModal();
        }catch(error){
            console.log(error);
        }
    }
    const changeHandler=(e)=>{
        setComment({
            content:e.target.value
        });
    }


    return (
<div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-primary ${classes["close-btn"]}`}
          onClick={setShowCommentModal}
        ></i>
        <h3 className="text-primary">Comment on Post</h3>
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
    )
}

export default CommentModal
