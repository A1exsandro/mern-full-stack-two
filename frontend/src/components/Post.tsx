import React from 'react'
import moment from 'moment'
import { PostMessage } from '../features/postsSlice'

interface PostProps {
  post: PostMessage;
}

const Post: React.FC<PostProps> = ({ post }) => { 
  console.log(post)
  return (
    <div 
      className="flex flex-col w-80 aspect-[3/4] rounded-xl m-2 shadow-2xl"
    >
      <div className="h-1/2">
        <img 
          className="rounded-t-xl h-full"
          src={post.selectedFile} 
          alt="" 
        />
      </div>

      <div className="flex flex-col justify-between gap-2 p-3 rounded-b-xl 
        bg-gray-200 h-1/2">
        {/* CREATOR */}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{post.name}</h2>
          <h3 className="font-bold">{moment(post.createdAt).fromNow()}</h3>
        </div>

        {/* TAG */}
        <div className="text-gray-500">
          {post.tags.map((tag) => `#${tag} `)}
        </div>

        {/* TITLE */}
        <div className="text-xl font-bold">
          {post.title}
        </div>

        {/* CONTENT */}
        <div className="text-gray-500">
          {post.message}
        </div>

        {/* REACT */}
        <div className="flex justify-between px-3 text-blue-800">
          {/* LIKE */}
          <div className="">
            LIKE
          </div>

          {/* DELETE */}
          <div className="">
            DELETE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
