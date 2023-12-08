import React from 'react'
import { useNavigate } from 'react-router-dom'
const Post2 = () => {
    let main = useNavigate();
    const handleClick = () => {
        main('/post')
    }
  return (
    <div>
      <h1>Hello this is Post 2</h1>
      <button onClick={handleClick}>Hello</button>
    </div>
  )
}

export default Post2
