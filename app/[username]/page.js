"use client"
import React from 'react'
import styles from '../page.module.scss'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Cards from '../cards'
import PostCards from '../PostCards'
function page(props) {
  let router = useRouter();

  let selectref = useRef(null)
  const [countries, setcountries] = useState()
  const [dateTime, setdateTime] = useState()
  const [selected, setselected] = useState("Africa/Abidjan")
  const [formattedTime, setformattedTime] = useState();
  const [posts, setposts] = useState()
  const [userData, setuserData] = useState()
  const [showmodal, setshowmodal] = useState(false)
  const [postid, setpostid] = useState()
  // console.log("dasx",props.params.username)

  useEffect(() => {
    axios.get('https://worldtimeapi.org/api/timezone')
      .then((res) => {
        setcountries(res.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://worldtimeapi.org/api/timezone/${selected}`)
      .then((res) => {
        console.log(res.data.datetime)
        setdateTime(new Date(res.data.datetime).toLocaleTimeString())

      })
  }, [selected])
  useEffect(() => {
    if (props.searchParams.indx) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${parseInt(props.searchParams.indx) + 1}`)
        .then((res) => {
          setposts(res.data);
        })
    }
  }, [props.searchParams.indx])
  useEffect(() => {
    if (props.searchParams.indx) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${parseInt(props.searchParams.indx) + 1}`)
        .then((res) => {
          setuserData(res.data);
        })
    }
  }, [props.searchParams.indx])
  
  console.log(props.searchParams.indx)
  // useEffect(() => {
  //  const time= setInterval(() => {
  //     setdateTime(new Date().toLocaleTimeString())
  //   }, 1000);
  //   return(()=>{
  //     clearInterval(time)
  //   })
  // }, [])
  // useEffect(() => {
  //  if(dateTime?.length>0){
  //   console.log(dateTime)
  //   let currDate=new Date(dateTime)
  //   setformattedTime(currDate?.toLocaleTimeString("en-US",{
  //     timeZone:'India'
  //   }))
  //  }
  // }, [dateTime])
  // console.log(postid)
const handleoutside=()=>{
  if(showmodal){
  setshowmodal(false)
  }
}
  return (
    <>
    <div id='parent' onClick={()=>handleoutside()} className={styles.container} style={{position:'relative', filter:`${showmodal?'blur(5px)':"none"}`}}>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className='bg-blue-500 rounded-xl w-[6rem] h-[3rem] cursor-pointer' onClick={() => router.push('/')}>
          Back
        </button>
        <select
          ref={selectref} value={selected} style={{ textAlign: 'center', borderRadius: '10px' }} onChange={(e) => setselected(e.target.value)}>
          {countries && countries.map((val, indx) => {
            return (
              <option value={val} key={indx}>{val}</option>
            )
          })}
        </select>
        <div>
          {dateTime}
        </div>
      </div>
      <center>
        <h1>Profile Page</h1>
      </center>
      <div>
        <Cards name="waqd" username="ede" address="esd" userData={userData} />
      </div>
      <div className={styles.postsWrapper}>
        {posts?.map((val, indx) => {
          return (
            <PostCards postid={indx+1} setpostid={setpostid} showmodal={showmodal} setshowmodal={setshowmodal}  title={val.title} content={val.body}/>
          )
        })}

      </div>
      
    </div>
    {showmodal&&<div className={styles.modal}>
<h3>
  Edit Content
</h3>
<textarea className={styles.input} height="100px" width="20px">
</textarea>
<button onClick={()=>submitClicked()} className='bg-blue-500 rounded-xl w-[6rem] h-[3rem] cursor-pointer'>
  Submit
</button>
      </div>}
</>
  )
}

export default page