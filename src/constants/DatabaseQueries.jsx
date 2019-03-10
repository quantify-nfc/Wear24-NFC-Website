import * as firebase from "firebase";

const rootRef = firebase.database().ref();

// Select top 25 blog posts
const getBlogPosts = (pageNumber = 1, postsPerPage = 10) => {
  return rootRef
    .child("blog_posts")
    .startAt((pageNumber - 1) * postsPerPage + 1)
    .endAt(pageNumber * postsPerPage);
};

// Select single blog post
const getBlogPost = (postId) => {
  return rootRef.child("blog_posts").child(postId);
};

// Get post comments
const getBlogComments = (setNumber = 1, commentsPerSet = 25) => {
  return rootRef
    .child("blog_comments")
    .child(postId)
    .startAt((setNumber - 1) * commentsPerSet + 1)
    .endAt(setNumber * commentsPerSet);
};
