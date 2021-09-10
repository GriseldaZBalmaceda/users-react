import React from 'react'
import styles from './UserList.module.css'

const UserList = (props) => {

    return(
        <div className={styles.users}>
            <ul className={styles.usersList}>
                {props.users.map(user => (
                    <li className={styles.user}>
                        {user.userName} {user.age}
                    </li>
                ))}
            </ul>   
        </div>
        
    )
}

export default UserList