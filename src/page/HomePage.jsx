import React, { useState } from 'react'
import Welcome from './Welcome'
import Thankyou from './Thankyou'
import Login from './Login'

function HomePage( {currentUser}) {
    const [showloader , setshowloader ] = useState(false)
    const handlewelcome = () =>{
        setshowloader(true)
        setTimeout(()=>{
            window.location.href = 'https:/cosmofeed.com/signin'
            console.log("redirect")
        },2000)
    }
    const handlethankyou = () =>{
        setshowloader(true)
        setTimeout(()=>{
            window.location.href = 'https:/cosmofeed.com/signin'
            console.log("redirect")
        },2000)
    }
  return (
    <div>
        <p>{currentUser}</p>
        {currentUser === "Akash" ? (
            <button onClick={handlewelcome}>Welcome</button>
        ): (
            <button onClick={handlethankyou}>Thank you</button>
        )}
        {showloader && <div> Loading... </div>}

        {/* {currentUser ? ( */}
            {/* // currentUser === "Akash" ? <Welcome/> : <Thankyou/>):(Login onLogi) */}
        
    </div>
  )
}

export default HomePage