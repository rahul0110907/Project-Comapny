import "./App.css";
import { useState } from "react";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Todo from "./Pages/Todo";





function App() {
 
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  


  const JSONFileData = (input) => {
    setUsers([...users, input]);
  };
  console.log(users);
  const LoginPage = (user) => {
    setCurrentUser(user);
  };
 
  return (
    <div>
    {currentUser ? (
      <div>
        <h1 className="flex justify-center items-center  text-3xl font-bold ">Welcome, {currentUser.name}!</h1>
        <Todo/>
      </div>
    ) : (
      <div className="flex justify-center items-center mx-10 my-2">
        
        <Signup JSONFileData={JSONFileData}/>:
         <Login users={users} LoginPage={LoginPage}/>
        
       
       
      </div>
    )}
  </div>
  
  );
}

export default App;
