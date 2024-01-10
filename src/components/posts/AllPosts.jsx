import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../services/PostService";
import Navbar from "../structure/Navbar";
import AllPostComments from "../comments/AllPostComments";
import {useNavigate} from "react-router-dom";
import {
  addPostDislike,
  addPostLike,
  getAllPostDislikesCount,
  getAllPostLikesCount,
} from "../../services/PostReactionService";

const AllPosts = ({userId, getDataFromChild}) => {

  const [posts, setPosts] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts();
      setPosts(response.data);
    }
    fetchData().catch((e) => console.error(`Error: ${e.message}`));
  }, []);

  const handleClickAddPost = () => {
    navigator("/addPost");
  }

  const handleClickAddLike = async (postId, userId) => {
    try {
      await addPostLike({postId, userId});
      const response = await getAllPosts();
      setPosts(response.data);
    } catch(e) {
      console.error(`Error: ${e.message}`);
    }
  }

  const handleClickAddDislike = async (postId, userId) => {
    try {
      await addPostDislike({postId, userId});
      const response = await getAllPosts();
      setPosts(response.data);
    } catch(e) {
      console.error(`Error: ${e.message}`);
    }
  }

  const handleClickDeletePost = async (postId, userId) => {
    try {
      await deletePost(postId, userId);
      setPosts((prevState) => prevState.filter(prevPost => prevPost.id !== postId));
    } catch(e) {
      console.error(`Error: ${e.message}`);
    }
  }

  const formatDate = (date) => {
    const parsedDate = new Date(date);

    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const hours = String(parsedDate.getHours()).padStart(2, '0');
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
    const seconds = String(parsedDate.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="post-list-container">
      <div>
        <Navbar userId={userId} />
      </div>
      <div>
        <h2>All Posts</h2>
      </div>
      <div>
        <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClickAddPost}>Add Post</button>
      </div>
      <div>
        {posts.map((post) => (
          <article key={post.postId}>
            <p>{post.firstName} {post.lastName}</p>
            <p>{formatDate(post.created)}</p>
            <p>{post.content}</p>
            <p>{<img src={post.image !== null ? `data:image/jpg;base64,${post.image}` : ""}
                     alt="" style={{maxWidth: '50%'}} />}</p>
            <button
              onClick={() => handleClickAddLike(post.postId, userId)}
              className="like-btn btn">LIKE {post.likes}</button>
            <button
              onClick={() => handleClickAddDislike(post.postId, userId)}
              className="dislike-btn btn mb-2 m-lg-2">DISLIKE {post.dislikes}</button>
            {post.userId === userId ? <button
              onClick={() => handleClickDeletePost(post.postId, userId)}
              className="delete-btn btn">Delete Post</button> : ""}
            <div className="comments-container mb-2 m-lg-2">
              <AllPostComments
                postId={post.postId}
                userId={userId}
                getDataFromChild={getDataFromChild} formatDate={formatDate}/>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;