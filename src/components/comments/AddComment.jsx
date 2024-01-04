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

    } catch(e) {
      console.error(`Error ${e.message}`);
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
    <div className="form-container">
      <div>
        <h2>Add Comment</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Content
              <input
                type="text"
                name="content"
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