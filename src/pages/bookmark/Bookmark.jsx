import { PostCard } from "../../components";
import { useUser } from "../../context";
import classes from "./bookmark.module.css";

const Bookmark = () => {
  const { userState } = useUser();
  return (
    <main className={classes["bookmarks-container"]}>
      <h1 className="centered-text text-primary">Bookmark</h1>
      <div className={classes["bookmark-list"]}>
        {userState.bookmarks.map((bookmark) => {
          return <PostCard key={bookmark._id} post={bookmark} />;
        })}
      </div>
    </main>
  );
};

export default Bookmark;
