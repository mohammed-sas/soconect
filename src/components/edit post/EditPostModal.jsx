import { useState } from 'react';
import { usePost } from '../../context';
import classes from '../create post/createPostModal.module.css';

const EditPostModal = ({post,setShowEditModal,setShowOptions}) => {
    const [editedPost,setEditedPost]=useState({content:""});
    const {editPost}=usePost();

    const saveHandler=async ()=>{
        try{
            await editPost(editedPost,post._id);
            setShowEditModal();
            setShowOptions();
        }catch(error){
            console.log(error);
        }
    }
    const changeHandler=(e)=>{
        setEditedPost({
            content:e.target.value
        })
    }
    return (
        <div className={classes["modal-container"]}>
        <div className={classes["modal"]}>
          <i
            className={`fas fa-times text-primary ${classes["close-btn"]}`}
            onClick={setShowEditModal}
          ></i>
          <h3 className="text-primary">Edit Post</h3>
          <textarea
            className={classes["text-area"]}
            name="post"
            placeholder="What's the buzz?"
            defaultValue={post.content}
            onChange={changeHandler}
          ></textarea>
          <button className="btn btn-primary" onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    )
}

export default EditPostModal
