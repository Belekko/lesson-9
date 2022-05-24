import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "invalid age", message: "Please entere a valid (>0)" });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
