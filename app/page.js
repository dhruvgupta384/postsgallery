"use client"
import App from "./app"

import Contextmy from "./context/context"
export default function Home() {

  return (
   <>
   <Contextmy>
   <App/> 
   </Contextmy>
  
   </>
  )
}
