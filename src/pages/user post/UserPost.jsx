import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../context";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;
  const { getUserPost } = useUser();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getUserPost(userId);
    })();
  });
  return <div></div>;
};

export default UserPost;
