import React from 'react'
import Post from '../components/Post'
const c=require("../markdown/markdown.md")

const Analytics = () => {
  // let c="a";
  return (
    <div className='pages'>
    <Post content={c}></Post>      
      
      </div>
  )
}

export default Analytics