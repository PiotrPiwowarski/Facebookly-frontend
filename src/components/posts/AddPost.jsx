import Navbar from "../structure/Navbar";
import {useState} from "react";
import {addPost} from "../../services/PostService";
import {useNavigate} from "react-router-dom";

export default function AddPost({id}) {

  const [post, setPost] = useState({
    content: "",
    imagePath: "",
    userId: id
  });

  const navigator = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;
    setPost((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await addPost(post);

      setPost({
        content: "",
        imagePath: "",
        userId: id
      });

      navigator("/allPosts");
    } catch(e) {
      console.error("Error: " + e.message);
    }
  }

  return (
    <div className="main">
      <div>
        <Navbar id={id} />
      </div>
      <div>
        <h1>Add Post</h1>
      </div>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Content
              <input
                type="text"
                name="content"
                value={post.content}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Image Path
              <input
                type="text"
                name="imagePath"
                value={post.imagePath}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="btn btn-dark mb-2 m-lg-2" type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
}