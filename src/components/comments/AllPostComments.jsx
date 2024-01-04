import {useEffect, useState} from "react";
import {getALlPostComments} from "../../services/CommentService";
import {useNavigate} from "react-router-dom";

const AllPostComments = ({postId, userId, onDataFromChild}) =>  {

  const [postComments, setPostComments] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getALlPostComments(postId);
      setPostComments(response.data);
    }
    fetchData().catch((e) => console.error(`Error: ${e.message}`));
  }, [postId]);

  const handleClick = () => {
    onDataFromChild(postId);
    navigator("/addComment");
  }

  return (
    <div className="comments-list-container">
      <div>
        <h4>Post Comments</h4>
      </div>
      <div>
        <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClick}>Add Comment</button>
      </div>
      <div>
        {postComments.map((comment) => (
          <article key={comment.id}>
            <p>{comment.userId}</p>
            <p>{comment.created}</p>
            <p>{comment.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AllPostComments;