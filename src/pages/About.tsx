import React from 'react'
import Post from '../components/Post'
const c=require("../markdown/markdown2.md")
const About = () => {
  return (
    <div className='pages'> 
    <Post content={c}></Post>    </div>
  )
}

export default About