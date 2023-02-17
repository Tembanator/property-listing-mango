import {BiEnvelope, BiLockAlt} from 'react-icons/bi'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OAuth from '../components/OAuth'

export default function Signin() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <section className="w-full sm:max-w-lg py-6 px-8 mx-auto m-8 rounded shadow-md">

        <h1 className="text-center text-3xl font-medium mb-10">Forgot password</h1>

        <form>
          <div className="relative">
            <input 
              className="mb-3 w-full rounded pl-8 border-[2px] border-gray-300/50 text-gray-500 focus:border-gray-400 focus:ring-gray-500 focus:ring-0 sm:text-sm" 
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"/>
            <BiEnvelope className="absolute top-3 left-3 text-lg text-gray-500" />
          </div>
          
          <button className="rounded bg-red-500 text-white text-center w-full cursor-pointer py-2 font-semibold hover:bg-red-600 active:bg-red-700 mt-4 block mb-5" >Send reset password</button>

          <Link to="/sign-in" className="text-center text-blue-900 block font-semibold transition duration-200 ease-in-out">Sign in instead</Link>

          <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
            <p className="text-center">Not signed up?<Link to="/sign-up" className="text-blue-900 ml-2 font-semibold transition duration-200 ease-in-out">Create account.</Link></p>

        </form>
      </section>
    </>
  )
}