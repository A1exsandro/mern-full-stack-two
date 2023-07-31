import { useEffect } from "react"
import { RootState } from "../store"
import Post from "./Post"

import { ThunkDispatch } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, PostMessage } from '../features/postsSlice'

const Posts = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const posts = useSelector((state: RootState) => state.post.data)
  
  useEffect(() => {
    dispatch(getPosts({} as PostMessage));
  },[dispatch])

  // HANDLE POSSIBILITY OF DUPLICATE ID ERROR
  const uniquePosts = posts.filter(
    (post, index, self) =>
      index === self.findIndex((p) => p._id === post._id)
  )

  return (
    <div className="flex">
      {
        uniquePosts.map((post: PostMessage) => (
          <Post key={post._id} post={post} />
        ))
      }
    </div>
  )
}

export default Posts
