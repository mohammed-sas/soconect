import { PostCard } from "../../components";
import { useSelector } from "react-redux";
import classes from "./bookmark.module.css";

const Bookmark = () => {
  const user= useSelector(state=>state.user);
  return (
    <main className={classes["bookmarks-container"]}>
      <h1 className="centered-text text-primary">Bookmark</h1>
      <div className={classes["bookmark-list"]}>
        {user.bookmarks.map((bookmark) => {
          return <PostCard key={bookmark._id} post={bookmark} />;
        })}
      </div>
    </main>
  );
};

export default Bookmark;
