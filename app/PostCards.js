import React from 'react'
import styles from './page.module.scss'
import axios from 'axios';
function PostCards({title,content,showmodal,setshowmodal,setpostid,postid}) {

  return (
    <div className={styles.posts} onClick={()=>{setshowmodal(true);setpostid(postid)}}>
        <p>{title}</p>
        <p>
          {content}

        </p>
    </div>
  )
}

export default PostCards