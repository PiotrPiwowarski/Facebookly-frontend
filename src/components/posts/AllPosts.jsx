import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/PostService";
import Navbar from "../structure/Navbar";

export default function AllPosts({id}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPosts();
      setPosts(response.data);
    }
    fetchData().catch((e) => console.error("Error: " + e.message));
  }, []);

  return (
    <div className="main">
      <div>
        <Navbar id={id} />
      </div>
      <div>
        <h2>All Posts</h2>
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
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.content}</td>
                  <td><img src={post.image !== null ? `data:image/jpg;base64,${post.image}` : ""} alt="" style={{maxWidth: '50%'}} /></td>
                  <td>{post.created}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}