import {addComment} from "../../services/CommentService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddComment = ({userId, postId}) => {

  const navigator = useNavigate();

  const [comment, setComment] = useState({
    content: "",
    userId: userId,
    postId: postId
  })

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(comment);

      setComment({
        content: "",
        userId: "",
        postId: ""
      });

      navigator("/allPosts");

    } catch(err) {
      setError("Something went wrong!");
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setComment((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <div className="form-container main">
      <div>
        <h2>Add Comment</h2>
      </div>
      {error !== null ? <div>
        <p className="error">{error}</p>
      </div> : ""}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Content
              <input
                type="text"
                name="content"
                required
                value={comment.content}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <button className="btn btn-dark mb-2 m-lg-2" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;