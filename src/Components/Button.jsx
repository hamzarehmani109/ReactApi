import React, { useState } from 'react'
function Button() {

const [ user ,setuser] =useState ("");
const [ usererr ,setusererr] =useState ("false");

 function loginHandle(e){
    e.prevent.default()
 }



    function useHandler (e){
        let item= e.target.value;
        if(item.length<3){
            setusererr ( true)  
        }
    }
  return (
    <div>
        <form onSubmit={loginHandle}>
        <h1>name</h1>
      <input type="text" placeholder='Enter you name' onChange={useHandler} />
      </form>
    </div>
  )
}

export default Button
