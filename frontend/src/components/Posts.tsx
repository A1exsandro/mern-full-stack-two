import Post from "./Post"

const Posts = () => {
  const posts: string[] = ['']
  return (
    <div className="">
      {
        posts.map(() => (
          <Post />
        ))
      }
    </div>
  )
}

export default Posts
