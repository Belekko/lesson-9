import "./App.css";
import AddUser from "./components/Users/AddUser";
import React, { useState } from "react";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteUserHandler = (filteredUsers) => {
    setUserList(filteredUsers);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
