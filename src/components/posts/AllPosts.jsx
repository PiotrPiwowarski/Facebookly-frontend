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
    <div className="main">
      <div>
        <Navbar id={id} />
      </div>
      <div>
        <h1>All Posts</h1>
      </div>
      <div>
        <button onClick={handleClick}>Add Post</button>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Content</th>
              <th>Image</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.content}</td>
                  <td><img src={post.image !== null ? `data:image/jpg;base64,${post.image}` : ""}
                           alt="" style={{maxWidth: '50%'}} /></td>
                  <td>{post.created}</td>
                  <AllPostComments postId={post.id} onDataFromChild={onDataFromChild}/>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}