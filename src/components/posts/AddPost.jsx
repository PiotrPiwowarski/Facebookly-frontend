import {useState} from "react";
import {addPost} from "../../services/PostService";
import {useNavigate} from "react-router-dom";

const AddPost = ({userId}) => {

  const [post, setPost] = useState({
    content: "",
    imagePath: "",
    userId: userId
  });

  const [error, setError] = useState(null);

  const navigator = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addPost(post);

      setPost({
        content: "",
        imagePath: "",
        userId: userId
      });

      navigator("/allPosts");
    } catch(err) {
      setError("Something went wrong!")
    }
  }

  return (
    <div className="form-container main">
      <div>
        <h2>Add Post</h2>
      </div>
      {error !== null ? <div>
        <p className="error">{error}</p>
      </div> : ""}
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Content
              <input
                type="text"
                name="content"
                required
                value={post.content}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Image
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

export default AddPost;