import React from 'react'
import { useNavigate } from 'react-router-dom'
const Post1 = () => {
    let nav = useNavigate();
    const handleClick = () => {
        nav('/post2')
    }
  return (
    <div style={{backgroundColor: "#FFDDD2", fontFamily: 'cursive'}}>
      <h1> <strong>Welcome to Suhavi's Blogs</strong></h1>
      <p>Hello My name is Suhavi. I am currently pursuing my Bachelor's in Computer Science and Engineering</p>
      <p>Let's get started now that you've seen my blog.</p>
      <br />
      <center><img src='https://us.123rf.com/450wm/topicha/topicha2110/topicha211000009/175284983-elegant-woman-with-hat-line-art-portrait-young-beautiful-girl-abstract-linear-style-vector.jpg?ver=6' style={{width: '600px'}}></img></center>
      <br /><br />
      <button onClick = {handleClick} style={{backgroundColor: "#F2BED1", width: "80px", height: "50px"}}>Welcome</button>
      <p style={{color: "#FFDDD2"}}>Lorem30</p>
    </div>
    
  )
}

export default Post1

