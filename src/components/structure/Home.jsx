import {useNavigate} from "react-router-dom";
export default function Home() {

  const navigator = useNavigate();

  function login() {
    navigator("/login");
  }

  function addUser() {
    navigator("/addUser");
  }

  return (
    <div className="main">
      <button className="home-btn btn btn-dark mb-2 m-lg-2" onClick={login}>Login</button>
      <button className="home-btn btn btn-dark mb-2 m-lg-2" onClick={addUser}>Register</button>
    </div>
  );
}