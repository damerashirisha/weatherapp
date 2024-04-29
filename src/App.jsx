
import React, { useState } from "react"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import './style.css'

const App=()=> {
 const [value,setValue]=useState('')
 console.log(value)

 const handleValue=(c)=>{
  setValue(c)

 }

  return (
    <>
    <div id="id1">
    <Header onValue={handleValue}/>
    <Main data={value}/>
    <Footer/>
    </div>
    </>
  )
}

export default App
