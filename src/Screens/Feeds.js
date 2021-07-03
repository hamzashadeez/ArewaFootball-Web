import React from 'react'
import PostForm from '../Components/PostForm'
import Post from '../Components/Post'

function Feeds() {
    return (
        <div className='px-3'>
           <PostForm />
           <Post />
           <Post />
           <Post />
        </div>
    )
}

export default Feeds
