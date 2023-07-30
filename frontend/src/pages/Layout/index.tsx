import { useEffect, useState } from "react"
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom" 

interface UserData {
  user: {
    token: string;
  }
}

const Layout = () => {
  const profileString = localStorage.getItem('userData')
  const initialProfile: UserData = profileString ? 
    JSON.parse(profileString) : {user: { token: null }}
  console.log('here',initialProfile.user);
  const location = useLocation()
  const navigate = useNavigate()

  const initialToken = initialProfile.user.token
  const [profileToken, setProfileToken] = useState(initialToken)

  const logout = () => {
    localStorage.clear()
    navigate('/auth')
    setProfileToken(initialToken)
  }

  useEffect(() => {
    const updatedProfileString = localStorage.getItem('userData')
    const updatedProfile: UserData = updatedProfileString ? 
      JSON.parse(updatedProfileString) : { user: { token: "" } }
    const updatedToken = updatedProfile.user.token;
    setProfileToken(updatedToken)
    
    // TREAT AN EXPIRATION TIME FOR THE TOKEN
  }, [location]) 

  return (
    <>
      <nav 
        className="flex justify-between items-center px-8 font-bold 
        bg-gray-200"
      >
        <div className="text-2xl text-blue-500">
          <Link to="/">Memories</Link>
        </div>
        {
          profileToken ? (
            // LOGOUT
            <button 
              className="bg-blue-500 text-white px-5 py-2 rounded-xl my-2"
              onClick={logout}
            >
              Logout
            </button>

          ) : (
            // LOGIN
            <button 
              className="bg-blue-500 text-white px-5 py-2 rounded-xl my-2"
            >
              <Link to="/auth">Sing In</Link>
            </button>
          )
        }
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
