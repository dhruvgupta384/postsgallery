"use client"
import React from 'react'
import { createContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
export const myContext=createContext();
function Contextmy(props) {
    
    const [userData, setuserData] = useState();
    const [postData, setpostData] = useState();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
          // console.log(res)
          setuserData(res.data)
        })
      },[])

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
          // console.log(res)
          setpostData(res.data)
        })
      },[])
  return (
    <myContext.Provider value={{"userData":userData,"postData":postData}}>
    {props.children}
    </myContext.Provider>
  )
}

export default Contextmy