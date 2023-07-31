import axios from 'axios'

interface Profile {
  token: string;
}

const API = axios.create({ baseURL: 'http://localhost:5001'})

API.interceptors.request.use((req) => {
  const profileString = localStorage.getItem('profile')
  if (profileString !== null) {
    const profile: Profile = JSON.parse(profileString)
    req.headers.Authorization = `Bearer ${profile.token}`
  }

  return req;
})

export const fetchPosts = () => API.get('/posts')

export const signIn = (formData: any) => API.post('/user/signin', formData)
export const signUp = (formData: any) => API.post('/user/signup', formData)
