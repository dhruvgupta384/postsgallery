import React from 'react'
import { useRouter } from 'next/navigation'
function Usercards({name,noofPosts,indx}) {
   let Router=useRouter();
  return (
    <div  onClick={()=>Router.push(`/${name.replace(" ",'-')}?indx=${indx}`)}  className='bg-orange-100 w-90 mb-10 rounded-xl h-20 items-center pl-5 pr-5 flex cursor-pointer justify-between'>
   {name}
   <div>{noofPosts&&JSON.parse(noofPosts)[name]}</div>
    </div>
  )
}

export default Usercards