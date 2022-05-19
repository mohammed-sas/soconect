import classes from "./feeds.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPost,
  getNthPagePost,
} from "../../../redux/async thunks/postThunk";
import PostCard from "../../../components/post card/PostCard";
import { useState, useRef } from "react";
import { useEffect } from "react";
const Feeds = () => {
  const { posts, maxPage } = useSelector((state) => state.posts);
  const [pageNum, setPageNum] = useState(0);
  const [lastElement, setLastElement] = useState(null);
  const dispatch = useDispatch();
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    })
  );

  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  useEffect(() => {
    if (pageNum <= maxPage)
      (async () => {
        dispatch(getNthPagePost(pageNum));
      })();
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <div className={classes["post-list"]}>
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return (
            <PostCard key={post._id} post={post} innerRef={setLastElement} />
          );
        }
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Feeds;
