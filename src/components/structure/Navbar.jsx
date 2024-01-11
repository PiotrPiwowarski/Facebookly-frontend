import {useNavigate} from "react-router-dom";
import {logout} from "../../services/AuthenticationService";
import {deleteUser} from "../../services/UserService";

const Navbar = ({userId}) => {

  const navigator = useNavigate();

  const handleClickLogout = () => {
    logout(userId);
    navigator("/");
  }

  const handleClickAllUsers = () => {
    navigator("/allUsers")
  }

  const handleClickAllPosts = () => {
    navigator("/allPosts")
  }

  const handleClickDeleteUser = async () => {
    await deleteUser(userId);
    navigator("/login");
  }

  return (
    <div className="nav">
      <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClickAllUsers}>All Users</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClickAllPosts}>All Posts</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClickLogout}>Logout</button>
      <button className="btn delete-btn mb-2 m-lg-2" onClick={handleClickDeleteUser}>Delete Account</button>
    </div>
  );
}

export default Navbar;