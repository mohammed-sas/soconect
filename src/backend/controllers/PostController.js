import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to post are present here.
 * */

/**
 * This handler handles gets all posts in the db.
 * send GET Request at /api/posts
 * */

export const getAllpostsHandler = function () {
  return new Response(200, {}, { posts: this.db.posts });
};

/**
 * This handler gets post by postId in the db.
 * send GET Request at /api/posts/:postId
 * */

export const getPostHandler = function (schema, request) {
  const postId = request.params.postId;
  try {
    const post = schema.posts.findBy({ _id: postId }).attrs;
    return new Response(200, {}, { post });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler gets posts of a user in the db.
 * send GET Request at /api/posts/user/:username
 * */

export const getAllUserPostsHandler = function (schema, request) {
  const { username } = request.params;
  try {
    const posts = schema.posts.where({ username })?.models;
    return new Response(200, {}, { posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles creating a post in the db.
 * send POST Request at /api/user/posts/
 * body contains {content}
 * */

export const createPostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postData } = JSON.parse(request.requestBody);
    const post = {
      _id: uuid(),
      userId:user._id,
      ...postData,
      likes: {
        likeCount: 0,
        likedBy: [],
      },
      comment: {
        commentCount: 0,
        comments: [],
      },
      username: user.username,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    };

    this.db.posts.insert(post);
    this.db.users.update({_id:user._id},{...user,posts:user.posts.concat(post)});
    return new Response(201, {}, { post: post});
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating a post in the db.
 * send POST Request at /api/posts/edit/:postId
 * body contains { postData }
 * */
export const editPostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const { postData } = JSON.parse(request.requestBody);
    let post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.username !== user.username) {
      return new Response(
        400,
        {},
        {
          errors: ["Cannot edit a Post doesn't belong to the logged in User."],
        }
      );
    }
    post = { ...post, ...postData };
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles liking a post in the db.
 * send POST Request at /api/posts/like/:postId
 * */

export const likePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const post = schema.posts.findBy({ _id: postId }).attrs;
    post.likes.likeCount += 1;
    post.likes.likedBy.push({ username: user.username, userId: user._id });
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles disliking a post in the db.
 * send POST Request at /api/posts/dislike/:postId
 * */

export const dislikePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    let post = schema.posts.findBy({ _id: postId }).attrs;
    post.likes.likeCount -= 1;
    const updatedLikedBy = post.likes.likedBy.filter(
      (currUser) => currUser.userId !== user._id
    );
    post.likes.likedBy = updatedLikedBy;
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles deleting a post in the db.
 * send DELETE Request at /api/user/posts/:postId
 * */
export const deletePostHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    let post = schema.posts.findBy({ _id: postId }).attrs;
    if (post.username !== user.username) {
      return new Response(
        400,
        {},
        {
          errors: [
            "Cannot delete a Post doesn't belong to the logged in User.",
          ],
        }
      );
    }
    this.db.posts.remove({ _id: postId });
    this.db.users.update({_id:user._id},{...user,posts:user.posts.filter(p=>p._id !== postId)});
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles commenting on a post in the db.
 * send POST Request at /api/posts/comment/:postId
 *
 * */
export const addCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const { comment } = JSON.parse(request.requestBody);
    post.comment.commentCount += 1;
    const newComment = {
      _id: uuid(),
      ...comment,
      userId: user._id,
      username: user.username,
    };
    post.comment.comments.push(newComment);
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles deleting a post in the db.
 * send DELETE Request at /api/user/posts/:postId/:commentId
 * */

export const deleteCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const postId = request.params.postId;
    const commentId = request.params.commentId;
    let post = schema.posts.findBy({ _id: postId }).attrs;
    let comment = { ...post.comment };
    let commentsArray = comment.comments.filter((c) => c._id !== commentId);
    comment.commentCount -= 1;
    comment = { ...comment, comments: commentsArray };
    post = { ...post, comment };
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    user.bookmarks = user.bookmarks.map((b) => {
      if (b._id === postId) {
        return post;
      } else return b;
    });
    this.db.users.update({ _id: user._id }, { ...user ,bookmarks:user.bookmarks});
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const getAllHashtags=function (schema,request){
  let posts = this.db.posts;
  let hashtagsArray = posts.map(post=>post.hashtags);
  let hashtags = hashtagsArray.reduce((acc,curr)=>[...acc,...curr],[]);
  let uniqueHashtags = hashtags.reduce((acc,curr)=>acc.some(tag=>tag===curr)? acc:[...acc,curr],[]);
  return new Response(200, {}, { hashtags: uniqueHashtags });  

}

export const getHashtagPosts=function (schema,request){
  let posts = Array.from(this.db.posts);
  let hashtag= request.params.hashtag;
  let hashtagPosts = posts.filter(post=>post.hashtags.some(h=>h===hashtag));;
  return new Response(200, {}, { hashtagPosts });  

}

export const updatePollPost=function (schema,request){
  const postId = request.params.postId;
  const { results } = JSON.parse(request.requestBody);
  let post = schema.posts.findBy({ _id: postId }).attrs;
  post.poll.resData=results;
  post.poll.isVoted=true;
  this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
  return new Response(201, {}, { post });  

}