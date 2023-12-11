import React, { useState } from 'react'

export const Signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('');
    const [password,setPassword]=useState('');
    const handleClick = ()=>{
        const payload = {
            name,
            email,
            password,
            gender,
        }
        fetch("https://proud-bandanna-colt.cyclic.app/",{
            method:'POST',
            headers:{
                "Content-type": 'application/json',
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <h2>register </h2>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text"  value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>Register</button>
    </div>
  )
}
