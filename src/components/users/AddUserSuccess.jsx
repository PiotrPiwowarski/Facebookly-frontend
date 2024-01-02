import {useNavigate} from "react-router-dom";
import Navbar from "../structure/Navbar";

export default function AddUserSuccess({id}) {

  const navigator = useNavigate();

  function handleClick() {
    navigator("/login");
  }

  return (
    <div>
      <Navbar id={id} />
      <h2>Your account has been successfully created!</h2>
      <button className="btn btn-dark mb-2 m-lg-2" onClick={handleClick}>Login</button>
    </div>
  );
}