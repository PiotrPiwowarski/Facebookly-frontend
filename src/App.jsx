import "./App.css";
import Header from "./components/structure/Header";
import AllUsers from "./components/users/AllUsers";
import Footer from "./components/structure/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/structure/Login";
import AddUser from "./components/users/AddUser";
import Home from "./components/structure/Home";
import AllPosts from "./components/posts/AllPosts";
import {useState} from "react";
import AddPost from "./components/posts/AddPost";
import AddUserSuccess from "./components/users/AddUserSuccess";

function App() {

  const [userId, setUserId] = useState(-1);

  function handleUserIdFromChild(id) {
    console.log(id);
    setUserId(id);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/login" element={<Login onDataFromChild={handleUserIdFromChild} />}></Route>
          <Route path="/addUser" element={<AddUser id={userId} />}></Route>
          <Route path="/addUserSuccess" element={<AddUserSuccess id={userId} />}></Route>
          <Route path="/allUsers" element={<AllUsers id={userId} />}></Route>
          <Route path="/addPost" element={<AddPost id={userId} />}></Route>
          <Route path="/allPosts" element={<AllPosts id={userId} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
