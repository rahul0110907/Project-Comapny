import "./App.css";
import {  useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Todo from "./Pages/Todo";





function App() {
 
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  


  const JSONFileData = (input) => {
    setUsers([...users, input]);
  };
console.log(users)

  const LoginPage = (user) => {
     setCurrentUser(user);
  };

 
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Signup JSONFileData={JSONFileData}/>}/>
  <Route path="/Todo" element={<Todo currentUser={currentUser}/>}/>
  <Route path="/Login" element={<Login users={users} LoginPage={LoginPage}/>}/>
  
 </Routes>
 </BrowserRouter>
  
  );
}

export default App;
