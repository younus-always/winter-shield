import { FcGoogle } from 'react-icons/fc'
import loginImage from '../assets/login.svg'
import { IoMdEye } from 'react-icons/io'
import { TbEyeClosed } from 'react-icons/tb'
import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../provider/AuthProvider'
import useTitle from '../hook/useTitle'

const Login = () => {
      useTitle("Login")
      const [showPassword, setShowPassword] = useState(false)
      const { signIn, googleLogin, setUser } = useContext(authContext)
      const location = useLocation()
      const navigate = useNavigate()

      const handleSubmit = e => {
            e.preventDefault()
            const form = new FormData(e.target)
            const email = form.get('email')
            const password = form.get('password')
            signIn(email, password)
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        navigate(location?.state ? location.state : '/')
                  }).catch(err => {
                        console.log(err)
                  })
      }

      const handleGoogle = () => {
            googleLogin()
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        navigate(location?.state ? location.state : '/')
                  }).catch(err => {
                        console.log(err)
                  })
      }
      const [email, setEmail] = useState('')
      // Forget Password
      const handleForgetPassword = () => {
            navigate('/forget-password', { state: { email } })
      }

      return (
            <>
                  <h2 className="font-bold text-3xl lg:text-4xl text-center py-7">Login to Your Account...</h2>
                  <div className="hero min-h-screen mb-8">
                        <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
                              <div className='w-full max-w-2xl'>
                                    <img src={loginImage} alt="" />
                              </div>
                              {/* Login Form */}
                              <div className="card w-full max-w-md shrink-0 shadow-xl">
                                    <form onSubmit={handleSubmit} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email'
                                                      onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control relative">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                                <button onClick={() => setShowPassword(!showPassword)} className='w-8 h-8 rounded-full hover:bg-gray-200 transition flex items-center justify-center absolute right-2 top-11'>
                                                      {showPassword ? <IoMdEye size={18} /> : <TbEyeClosed />}
                                                </button>
                                                <label className="label">
                                                      <button onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>
                                          <div className="border border-b relative text-center my-5">
                                                <span className='absolute -top-3 bg-white px-4'>OR</span>
                                          </div>
                                          <div className="form-control">
                                                <button onClick={handleGoogle} className='flex items-center justify-center gap-3 px-4 rounded-lg border-2 font-bold h-12'>
                                                      <FcGoogle size={22} />
                                                      Login with Google
                                                </button>
                                          </div>
                                    </form>
                                    <div className='text-center w-11/12 mx-auto pb-8'>
                                          <p className='text-gray-500 font-semibold'>Don&apos;t have an account ? <Link to='/register' className='text-primary'>Register</Link></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Login