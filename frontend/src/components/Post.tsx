import capa from '../assets/capa.png'

type Post = {
  id?: number;
  title: string;
  content: string;
  tags: string[];
  selectedFile: string;
  creator: string;
  createdAt: Date;
}

const Post = () => { 

  return (
    <div 
      className="flex flex-col w-80 aspect-[3/4] rounded-xl m-2 shadow-2xl"
    >
      <div className="">
        <img 
          className="rounded-t-xl"
          src={capa} 
          alt="" 
        />
      </div>

      <div className="flex flex-col justify-between gap-2 p-3 rounded-b-xl 
        bg-gray-200">
        {/* CREATOR */}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Alexsandro</h2>
          <h3 className="font-bold">8 days ago</h3>
        </div>

        {/* TAG */}
        <div className="text-gray-500">
          #yourTag
        </div>

        {/* TITLE */}
        <div className="text-xl font-bold">
          Only a test of title
        </div>

        {/* CONTENT */}
        <div className="text-gray-500">
          A test of content in an application web. Today is Jully, 27.
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
