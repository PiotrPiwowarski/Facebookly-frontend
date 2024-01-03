import {useEffect, useState} from "react";
import {getALlPostComments} from "../../services/CommentService";
import AddComment from "./AddComment";
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
    <div className="sub-main">
      <div>
        <h3>Post Comments</h3>
      </div>
      <div>
        <button onClick={handleClick}>Add Comment</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Comment id
              </th>
              <th>
                Content
              </th>
              <th>
                Created
              </th>
              <th>
                User Id
              </th>
              <th>
                Post Id
              </th>
            </tr>
          </thead>
          <tbody>
            {postComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.content}</td>
                <td>{comment.created}</td>
                <td>{comment.userId}</td>
                <td>{comment.postId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllPostComments;