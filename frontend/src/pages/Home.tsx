import { useEffect, useState } from "react"
import Form from "../components/Form"
import Posts from "../components/Posts"
import { useDispatch } from 'react-redux'
import { getPosts, PostMessage } from '../features/postsSlice'
import { ThunkDispatch } from "@reduxjs/toolkit"

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts({} as PostMessage))
  },[currentId, dispatch])

  return (
    <div className="flex justify-center flex-wrap">
      <Posts />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  )
}

export default Home
