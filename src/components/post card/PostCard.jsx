import classes from "./postCard.module.css";
import { useToggle } from "../../hooks/useToggle";
import EditPostModal from "../edit post/EditPostModal";
import CommentModal from "../comment/CommentModal";
import { useLocation, useNavigate } from "react-router-dom";
import { LeafPoll } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";
import { Hashtag } from "../index";
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
const customTheme = {
  textColor: "#9333ea",
  mainColor: "#9333ea",
  backgroundColor: "rgb(255,255,255)",
  alignment: "center",
  rightColor: "#9333ea",
  leftColor: "#9333ea",
};
const PostCard = ({ post }) => {
  const location = useLocation();
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
    navigate("/");
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
  function vote(item, results) {
    // console.log("voted", item, results);
  }
  return (
    <div className={classes["post-container"]}>
      {user.username === post.username && userState.image ? (
        <img src={userState.image} alt="avatar" class="avatar avatar-sm"></img>
      ) : (
        <div className="avatar avatar-text">
          <span>{post.username.substring(0, 2).toUpperCase()}</span>
        </div>
      )}
      <div className={classes["post-body-container"]}>
        <div className={classes["username-id-container"]}>
          <div
            className={classes["username-body"]}
            onClick={() => navigate(`/posts/user/${post.userId}`)}
          >
            <span className="text-white">@{post.username}</span>
          </div>
          {location.pathname !== "/hashtags" && (
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
          )}
        </div>
        <div className={classes["post-body"]} onClick={viewPostHandler}>
          {post.image && (
            <div className={classes["image-container"]}>
              <img src={post.image} alt="post image" />
            </div>
          )}
          <p className="text-white">{post.content}</p>
          {post.poll && (
            <div className={classes["poll-container"]}>
              <LeafPoll
                type="binary"
                question={post.poll.question}
                results={post.poll.resData}
                theme={customTheme}
                onVote={vote}
                isVoted={false}
              />
            </div>
          )}
          <div className={classes["hashtag-container"]}>
            {post.hashtags.map((tag) => {
              return <Hashtag key={tag} tag={tag} />;
            })}
          </div>
        </div>
        {location.pathname !== "/hashtags" && (
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
        )}
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
