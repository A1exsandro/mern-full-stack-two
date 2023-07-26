import { Outlet, Link } from "react-router-dom" 

const Layout = () => {
  return (
    <>
      <nav 
        className="flex justify-between items-center px-8 text-2xl font-bold 
        text-blue-500"
      >
        <div className="">
          Memories
        </div>
        <button 
          className="bg-blue-500 text-white px-5 py-2 rounded-xl mt-2"
        >
          Sin In
        </button>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
