import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import userfuntion from '../Redux/Actions/Action.js'
import {useDispatch,useSelector} from 'react-redux'
export default function UserData() {
  const dis=useDispatch();
  const [name ,setname]=useState("");
  const[email,setemail]=useState("");
  const [json,setjson]=useState({});
  function myfunction(){
    if(name==="" || email==""){
      document.getElementById("myBtn").disabled = true;
    }
  }
  return (
    <div className='user_data'>
        <label>User Name</label>
        <input type="text" id="name" onChange={e=>setname(e.target.value)} />
        <label>Email Id</label>
        <input type='email' id='email' onChange={e=>setemail(e.target.value)}/>
        <Link to='/Exam' ><button id="myBtn" onClick={myfunction}>Start Exam</button></Link>
        {email}
    </div>
  )
}
