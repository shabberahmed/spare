import { Suspense } from "react";

// Next.js fetch API in action
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const PostList = async () => {
  const posts = await loadPosts();
  return (
    <div className="post-list">
      {posts.map((post:any) => (
        <div key={post.id} className="post-listing">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
