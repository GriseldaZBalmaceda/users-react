import React, {useState, useRef}from 'react';
import classes from './UserForm.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setErrorModal] = useState(); 

  const formSubmitHandler = (event) => {
      event.preventDefault();
      let userName = nameInputRef.current.value;
      let userAge = ageInputRef.current.value;
      if(!userAge || !userName) {
          setErrorModal({
            title:"Missing Inputs",
            message:"Please enter values for both username and age"
          });
        } else if(userAge < 0) {
          setErrorModal({
            title:"Invalid Input",
            message:"Please enter a valid age (>0)"
          });
        } else {
          const user = {userName: userName, userAge: userAge};
          props.saveUser(user);
          nameInputRef.current.value = '';
          ageInputRef.current.value = '';     
      }
  }
  const closeModal=()=>{
    setErrorModal(false)
  }
  return (
      <form onSubmit={formSubmitHandler}>
          <div className={classes['form-control']}>
              <label>UserName</label>
              <input type="text" ref={nameInputRef} />
              <label>Age (Years)</label>
              <input type="text" ref={ageInputRef}/>
          </div>
          <Button type="submit">Add User</Button>
          {error ? <ErrorModal closeModal={()=>closeModal()} title={error.title} message={error.message} /> : null }
      </form>
  )
}

export default UserForm