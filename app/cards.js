import React from 'react'
import styles from './page.module.scss'
function Cards({name,userData}) {
  return (
    <div className={styles.divWrapper}>
        <div className={styles.dic}>
        <p>Name: {userData?.name}</p>
        <p>Address: {userData?.address?.city}</p>
        </div>
        <div className={styles.dic}>
        <p>Username: {userData?.username}</p>
        <p>Email: {userData?.email}</p>
        </div>
    </div>
  )
}

export default Cards