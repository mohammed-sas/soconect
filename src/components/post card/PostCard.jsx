import classes from "./postCard.module.css";
import { useToggle } from "../../hooks/useToggle";
import EditPostModal from "../edit post/EditPostModal";
import CommentModal from "../comment/CommentModal";
import { useNavigate } from "react-router-dom";
import {
  deletePost,
  likePost,
  unlikePost,
} from "../../redux/async thunks/postThunk";
import {
  addToBookmark,
  deleteBookmark,
} from "../../redux/async thunks/userThunk";
import { useDispatch, useSelector } from "react-redux";
const PostCard = ({ post }) => {
  const authState = useSelector((state) => state.auth);
  const { user } = authState;
  const [showOptions, setShowOptions] = useToggle(false);
  const [showEditModal, setShowEditModal] = useToggle(false);
  const [showCommentModal, setShowCommentModal] = useToggle(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const deleteHandler = () => {
    dispatch(deletePost(post._id));
  };
  const checkLiked = (postId) => {
    const likeArray = posts.find((existingPost) => existingPost._id === postId)
      ?.likes?.likedBy;
    return likeArray.some((likedUser) => likedUser.username === user.username);
  };

  const likeHandler = () => {
    checkLiked(post._id)
      ? dispatch(unlikePost(post._id))
      : dispatch(likePost(post._id));
  };
  const commentHandler = (e) => {
    e.stopPropagation();
    setShowCommentModal();
  };
  const viewPostHandler = () => {
    navigate(`/posts/${post._id}`);
  };
  const bookmarkHandler = () => {
    checkIfBookmarked(post._id)
      ? dispatch(deleteBookmark(post._id))
      : dispatch(addToBookmark(post._id));
  };
  const checkIfBookmarked = (postId) => {
    return userState.bookmarks.find(
      (bookmarkedPost) => bookmarkedPost._id === postId
    );
  };
  return (
    <div className={classes["post-container"]}>
      <div className="avatar avatar-text">
        <span>{post.username.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["post-body-container"]}>
        <div className={classes["username-id-container"]}>
          <div
            className={classes["username-body"]}
            onClick={() => navigate(`/posts/user/${post.userId}`)}
          >
            <span className="text-white">@{post.username}</span>
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
                <li onClick={bookmarkHandler}>
                  <i
                    className={`${
                      checkIfBookmarked(post._id) ? "fas " : "far "
                    } fa-bookmark`}
                  ></i>{" "}
                  Bookmark
                </li>
              </ul>
            )}
          </span>
        </div>
        <div className={classes["post-body"]} onClick={viewPostHandler}>
          {post.image && <div className={classes["image-container"]}><img src={post.image} alt="post image" /></div>}
          <p className="text-white">{post.content}</p>
        </div>
        <div className={classes["post-footer"]}>
          <div className={classes["footer-item"]} onClick={commentHandler}>
            <i className="far fa-comment text-white"></i>
            <span className="text-white">{post.comment.commentCount}</span>
          </div>
          <div className={classes["footer-item"]} onClick={likeHandler}>
            <i
              className={`fas fa-heart ${
                checkLiked(post._id) ? "text-primary" : "text-white"
              }`}
            ></i>
            <span className="text-white">{post.likes.likeCount}</span>
          </div>
        </div>
      </div>
      {showEditModal && (
        <EditPostModal
          post={post}
          setShowEditModal={setShowEditModal}
          setShowOptions={setShowOptions}
        />
      )}
      {showCommentModal && (
        <CommentModal post={post} setShowCommentModal={setShowCommentModal} />
      )}
    </div>
  );
};

export default PostCard;
