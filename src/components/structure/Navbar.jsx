import {useNavigate} from "react-router-dom";
import {logout} from "../../services/AuthenticationService";

export default function Navbar({id}) {

  const navigator = useNavigate();

  function logoutHandle() {
    logout(id);
    navigator("/");
  }

  function allUsers() {
    navigator("/allUsers")
  }

  function allPosts() {
    navigator("/allPosts")
  }

  return (
    <div>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={allUsers}>All Users</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={allPosts}>All Posts</button>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={logoutHandle}>Logout</button>
    </div>
  );
}