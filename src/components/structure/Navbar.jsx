import {useNavigate} from "react-router-dom";
import {logout} from "../../services/AuthenticationService";

const Navbar = ({id}) => {

  const navigator = useNavigate();

  const logoutHandle = () => {
    logout(id);
    navigator("/");
  }

  const allUsers = () => {
    navigator("/allUsers")
  }

  const allPosts = () => {
    navigator("/allPosts")
  }

  return (
    <div className="nav">
      <button className="btn btn-dark mb-2 m-lg-2" onClick={allUsers}>All Users</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={allPosts}>All Posts</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={logoutHandle}>Logout</button>
    </div>
  );
}

export default Navbar;