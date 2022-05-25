import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import DeleteModal from "../UI/DeleteModal";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filteredUsersHandler = (id) => {
    const filtered = props.users.filter((user) => user.id !== id);
    setFilteredUsers(filtered);
    setIsShowModal({ title: "Deleting user!", message: "Are you sure?" });
  };

  const deleteUserDataHandler = () => {
    props.onDelete(filteredUsers);
    setIsShowModal(false);
  };

  let show = <p>no users...</p>;

  if (props.users.length) {
    show = props.users.map((user) => (
      <li key={user.id}>
        {user.name}
        {user.age} years old
        <Button onClick={filteredUsersHandler.bind(null, user.id)}>
          Delete
        </Button>
      </li>
    ));
  }

  return (
    <div>
      {isShowModal && (
        <DeleteModal
          title={isShowModal.title}
          message={isShowModal.message}
          onDelete={deleteUserDataHandler}
          onClose={() => setIsShowModal(false)}
        />
      )}
      <Card className={styles.users}>
        <ul>{show}</ul>
      </Card>
    </div>
  );
};

export default UserList;
