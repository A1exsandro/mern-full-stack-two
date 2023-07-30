import React, { useState } from 'react'
import lock from '../assets/icons/lock.svg'
import Input from '../components/auth/Input'
import { useNavigate } from 'react-router-dom' 

import type { RootState } from '../store'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux' 
import { postUser, postSigin } from '../features/auth/authSlice'

const initialState = { 
  firstName: '', 
  lastName: '', 
  email: '', 
  password: '', 
  confirmPassword: '' 
} 

interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const user = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  console.log(user.status)

  const [form, setForm] = useState<FormValue>(initialState)
  const [isSignup, setIsSignup] = useState(true)
  const [showPassword, setShowPassword] = useState(false) 

  // SWITCH FORM TO REGISTER OR SING IN
  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     
    if (isSignup) { 
      try {
        const response = await dispatch(postUser(form))  
        if (user.status.toString() === 'succeeded' ) {
          localStorage.setItem('userData', JSON.stringify(response.payload))
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = await dispatch(postSigin(form)) 
        console.log(response)
        if (user.status.toString() === 'succeeded' ) {
          localStorage.setItem('userData', JSON.stringify(response.payload))
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // CAPTURE INPUT VALUE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ 
      ...form, [e.target.name]: e.target.value 
    })
  }

  return (
    <div className="flex justify-center">
      <div 
        className="flex flex-col items-center w-80 aspect-[3/4] rounded-xl 
        m-2 p-2 shadow-2xl"
      >
        {/* AUTH ICON */}
        <div 
          className="flex justify-center items-center bg-blue-500 rounded-full
            w-14 h-14"
          >
            <img src={lock} alt="Icon auth" />
        </div>

        {/* AUTH TITLE */}
        <div className="text-2xl">
        { isSignup ? 'Sign up' : 'Sign in' }
        </div>

        {/* FORM */}
        <form className="" onSubmit={handleSubmit}>
          {
            isSignup && (
              <div className="flex gap-2">
                <Input 
                  name="firstName"
                  label="First Name"
                  type="text"
                  handleChange={handleChange} 
                /> 
                <Input 
                  name="lastName"
                  label="Last Name"
                  type="text"
                  handleChange={handleChange} 
                />
              </div>
            )
          }
          
          <Input 
            name="email"
            label="Email"
            type="email"
            handleChange={handleChange} 
          /> 
          <Input 
            name="password"
            label="Password"
            type="password"
            handleChange={handleChange} 
          />

          { 
            isSignup && 
              <Input 
                name="confirmPassword"
                label="Repeat Password"
                type="password"
                handleChange={handleChange} 
              />
          }

          <button className="w-full bg-blue-500 text-white py-2 rounded-xl
            my-2"
          >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </button>

          {/* <LoginWithGoogle /> */}
          <div>{}</div>
        </form>

        <button className="" onClick={switchMode}>
          { 
            isSignup ? (
              'Already have an account? Sign in' 
              ) : (
              "Don't have an account? Sign Up" 
            )
          }
        </button>
      </div>
    </div>
  )
}

export default Auth
