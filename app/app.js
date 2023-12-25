"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { myContext } from './context/context'
import { useContext } from 'react'
import Usercards from './Usercards'
import { useRouter } from 'next/navigation'
function App() {

    const [noofPosts, setnoofPosts] = useState([])
    let {userData,postData}=useContext(myContext)
    let Router=useRouter();

const calcnoofPosts = ()=>{
     
    let arr=[];
    userData?.map((val,indx)=>{
        let count=0;
        postData?.map((postval)=>{
           
            if(postval.userId==val.id){
                count+=1;
            }
        })
        let varia=val.name
        arr.push({[varia]:count})
        
        setnoofPosts(arr);
    })
   
}

useEffect(() => {
    if(userData && postData)
 calcnoofPosts()
}, [postData,userData])
  return (
    <div className={styles.container}>
    <center>
       <h1>
         Directory
       </h1>
    </center>
 
    {userData?.map((val,indx)=>{
     return(
       <Usercards name={val.name} noofPosts={JSON.stringify(noofPosts[indx])} indx={indx}/>
     )
    })}
    
     </div>
  )
}

export default App