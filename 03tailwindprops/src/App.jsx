//import { useState } from 'react'

import Card from './components/card'
import './App.css'

function App() {
 //  let userName="priyanshu"
  // let myObj={
  //   name:"priyanhsu"
  // }

  // let arry=[1,2,3,4]
   
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 
      rounded-xl mb-4" >Tailwind Test</h1>
       <Card userName="priyanhsu" btnText="clickme" />
       <Card userName="priyanhsu" btnText="clickme" />
    </>
  )
}

export default App
