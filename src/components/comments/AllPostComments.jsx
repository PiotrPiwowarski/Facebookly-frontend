import {useEffect, useState} from "react";
import {deleteComment, getALlPostComments} from "../../services/CommentService";
import {useNavigate} from "react-router-dom";
import {addCommentDislike, addCommentLike} from "../../services/CommentReactionService";

const AllPostComments = ({postId, userId, getDataFromChild, formatDate}) =>  {

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
    getDataFromChild(postId);
    navigator("/addComment");
  }

  const handleClickAddLike = async (commentId, userId) => {
    try {
      await addCommentLike({commentId, userId});
      const response = await getALlPostComments(postId);
      setPostComments(response.data);
    } catch(e) {
      console.error(`Error: ${e.message}`)
    }
  }

  const handleClickAddDislike = async (commentId, userId) => {
    try {
      await addCommentDislike({commentId, userId});
      const response = await getALlPostComments(postId);
      setPostComments(response.data);
    } catch(e) {
      console.error(`Error: ${e.message}`)
    }
  }

  const handleClickDeleteComment = async (commentId, userId) => {
    try {
      await deleteComment(commentId, userId);
      setPostComments((prevState) => prevState.filter(prevPostComment => prevPostComment.commentId !== commentId));
    } catch(e) {
      console.error(`Error: ${e.message}`)
    }
  }

  return (
    <div className="comments-list-container main">
      <div>
        <h4>Post Comments</h4>
      </div>
      <div>
        <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClick}>Add Comment</button>
      </div>
      <div>
        {postComments.map((comment) => (
          <article key={comment.commentId}>
            <p>{comment.firstName} {comment.lastName}</p>
            <p>{formatDate(comment.created)}</p>
            <p>{comment.content}</p>
            <button
              onClick={() => handleClickAddLike(comment.commentId, userId)}
              className="like-btn btn">LIKE {comment.likes}</button>
            <button
              onClick={() => handleClickAddDislike(comment.commentId, userId)}
              className="dislike-btn btn mb-2 m-lg-2">DISLIKE {comment.dislikes}</button>
            {comment.userId === userId ? <button
              onClick={() => handleClickDeleteComment(comment.commentId, userId)}
              className="delete-btn btn">Delete Comment</button> : ""}
          </article>
        ))}
      </div>
    </div>
  );
}

export default AllPostComments;