import React, { useState } from 'react';
import classes from './App.module.css';
import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';

function App() {

  const [users, setUsers] = useState([
    { userName:'Devin', age:24, id:'g1' },
    { userName:'Chuck', age:23, id:'g2' }

  ]);

  const saveUser = (user) => {
      setUsers(prevUsers => {
      
        return [...prevUsers, {userName:user.userName, age:user.userAge, id:Math.random().toString()}];
      });
  }

  return (
    <React.Fragment>
      <div className={classes.form}>
        <UserForm saveUser={(user)=>saveUser(user)} />
        <UserList users={users} />
      </div>
    </React.Fragment>
  );
}

export default App;
