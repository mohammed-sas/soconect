import classes from "./postCard.module.css";
import { useToggle } from "../../hooks/useToggle";
import { useAuth, usePost } from "../../context";
import EditPostModal from "../edit post/EditPostModal";
const PostCard = ({ post }) => {
  const [showOptions, setShowOptions] = useToggle(false);
  const [showEditModal,setShowEditModal]=useToggle(false);
  const { authState } = useAuth();
  const { user } = authState;
  const {deletePost,likePost,unlikePost,postState} = usePost();
  const deleteHandler=async ()=>{
    try{
      await deletePost(post._id);
    }catch(error){
      console.log(error);
    }
  }
  const checkLiked=(postId)=>{
    const likeArray = postState.posts.find(existingPost=>existingPost._id === postId)?.likes?.likedBy;
    return likeArray.some(likedUser=>likedUser.username===user.username);
  }

  const likeHandler=async()=>{
    try{
      checkLiked(post._id)? await unlikePost(post._id) :await likePost(post._id);
    }catch(error){
      console.log(error);
    }
  }

  

  return (
    <div className={classes["post-container"]}>
      <div className="avatar avatar-text">
        <span>{post.username.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["post-body-container"]}>
        <div className={classes["username-id-container"]}>
          <div className={classes["username-body"]}>
            <span className="text-white">@{post.username}</span>
            <span className="text-white">3h</span>
          </div>
          <span className={classes["options"]}>
            <i
              className={`fas fa-ellipsis-h text-white ${classes["option-btn"]}`}
              onClick={setShowOptions}
            ></i>
            {showOptions && (
              <ul className={classes["option-list"]}>
                {user.username === post.username && (
                  <li onClick={deleteHandler}>
                    <i className="far fa-trash-alt"></i> Delete Post
                  </li>
                )}
                 {user.username === post.username && (
                  <li onClick={setShowEditModal}>
                    <i className="far fa-edit"></i> Edit Post
                  </li>
                )}
              </ul>
            )}
          </span>
        </div>
        <div className="tweet-body">
          <p className="text-white">{post.content}</p>
        </div>
        <div className={classes["post-footer"]}>
          <div className={classes["footer-item"]}>
            <i className="far fa-comment text-white"></i> 
            <span className="text-white">0</span>
          </div>
          <div className={classes["footer-item"]} onClick={likeHandler}>
            <i className="far fa-heart text-white"></i> 
            <span className="text-white">{post.likes.likeCount}</span>
          </div>
        </div>
      </div>
      {showEditModal && <EditPostModal post={post} setShowEditModal={setShowEditModal} setShowOptions={setShowOptions}/>}
    </div>
  );
};

export default PostCard;
