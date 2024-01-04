import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/PostService";
import Navbar from "../structure/Navbar";
import AllPostComments from "../comments/AllPostComments";
import {useNavigate} from "react-router-dom";

export default function AllPosts({id, onDataFromChild}) {

  const [posts, setPosts] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts();
      setPosts(response.data);
    }
    fetchData().catch((e) => console.error(`Error: ${e.message}`));
  }, []);

  const handleClick = () => {
    navigator("/addPost")
  }

  return (
    <div className="post-list-container">
      <div>
        <Navbar id={id} />
      </div>
      <div>
        <h2>All Posts</h2>
      </div>
      <div>
        <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClick}>Add Post</button>
      </div>
      <div>
        {posts.map((post) => (
          <article key={post.id}>
            <p>{post.userId}</p>
            <p>{post.created}</p>
            <p>{post.content}</p>
            <p>{<img src={post.image !== null ? `data:image/jpg;base64,${post.image}` : ""}
                     alt="" style={{maxWidth: '50%'}} />}</p>
            <div className="comments-container">
              <AllPostComments postId={post.id} onDataFromChild={onDataFromChild}/>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}