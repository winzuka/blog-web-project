import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogPosts } from "../../utilities/blogsApi.jsx";

const Post = () => {
  const [post, setPost] = useState({});

  const { postID } = useParams();

  useEffect(() => {
    setPost(blogPosts.find((post) => post.id === parseInt(postID)));
  }, [postID]);

  console.log(post);
  return (
    <div className="w-3/5 m-auto">
      <h1 className="text-center text-3xl font-bold mt-4 p-3">{post.title}</h1>
      <div className="border-t-2 border-b-2 mt-3 mb-2 p-3 flex justify-between items-center">
        <div>
          <img
            className="w-12 h-12 rounded-full inline"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Author pro pic"
          />
          <p className="inline ml-3">Author: {post.author}</p>
        </div>
        <div>
          <p>Release: {post.date}</p>
        </div>
      </div>
      <p className="mt-2 text-justify">{post.longDescription}</p>
    </div>
  );
};

export default Post;
