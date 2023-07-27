import { Outlet, Link } from "react-router-dom" 

const Layout = () => {
  return (
    <>
      <nav 
        className="flex justify-between items-center px-8 font-bold 
        bg-gray-200"
      >
        <div className="text-2xl text-blue-500">
          Memories
        </div>
        <button 
          className="bg-blue-500 text-white px-5 py-2 rounded-xl my-2"
        >
          Sing In
        </button>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
