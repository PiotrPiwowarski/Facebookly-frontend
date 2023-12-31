import {useEffect, useState} from "react";
import {getALlPostComments} from "../../services/CommentService";
import {useNavigate} from "react-router-dom";
import {addCommentDislike, addCommentLike} from "../../services/CommentReactionService";

const AllPostComments = ({postId, userId, getDataFromChild, formatDate}) =>  {

  const [postComments, setPostComments] = useState([]);

  const [likeCount, setLikeCount] = useState(0);

  const [dislikeCount, setDislikeCount] = useState(0);

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
    } catch(e) {
      console.error(`Error: ${e.message}`)
    }
  }

  const handleClickAddDislike = async (commentId, userId) => {
    try {
      await addCommentDislike({commentId, userId});
    } catch(e) {
      console.error(`Error: ${e.message}`)
    }
  }

  const handleMouseEnterGetAllLikes = async () => {
    try {

    } catch(e) {
      console.error(`Error: ${e.message}`);
    }
  }

  const handleMouseEnterGetAllDislikes = async () => {
    try {

    } catch(e) {
      console.error(`Error: ${e.message}`);
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
          <article key={comment.id}>
            <p>{comment.userId}</p>
            <p>{formatDate(comment.created)}</p>
            <p>{comment.content}</p>
            <button
              onMouseEnter={handleMouseEnterGetAllLikes}
              onClick={() => handleClickAddLike(comment.id, userId)}
              className="like-btn btn">Like</button>
            <button
              onMouseEnter={handleMouseEnterGetAllDislikes}
              onClick={() => handleClickAddDislike(comment.id, userId)}
              className="dislike-btn btn mb-2 m-lg-2">Dislike</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AllPostComments;