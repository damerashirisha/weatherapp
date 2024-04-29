import React from 'react'
import Forcastitem from './forcastitem'

const Forcastlist = ({forcastdata}) => {
     console.log(forcastdata)
  return (
   <>
        {forcastdata && forcastdata.list.map((item,index)=>(
            <Forcastitem key={index} forcastdata={item}/>
        ))}
   </>
  )
}

export default Forcastlist
