import { useContext, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { IoMdEye } from "react-icons/io"
import { TbEyeClosed } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"
import registerImg from "../assets/sign_up.svg"
import { authContext } from "../provider/AuthProvider"
import useTitle from "../hook/useTitle"
import toast from "react-hot-toast"
import { MdReportGmailerrorred } from "react-icons/md"

const Register = () => {
      useTitle("Register")
      const [errorMessage, setErrorMessage] = useState(null)
      const [showPassword, setShowPassword] = useState(false)
      const { signUp, googleLogin, updateUserProfile, setUser, logout } = useContext(authContext)
      const navigate = useNavigate()

      const handleSubmit = e => {
            e.preventDefault()
            setErrorMessage(null)
            const form = new FormData(e.target)
            const name = form.get('name')
            const photo = form.get('photo')
            const email = form.get('email')
            const password = form.get('password')
            const checkUpperLetter = /^(?=.*[A-Z]).*$/;
            const checkLowerLetter = /^(?=.*[a-z]).*$/;
            if (password.length < 6) {
                  return setErrorMessage("Password must be 6 characters !")
            }
            if (!checkUpperLetter.test(password)) {
                  return setErrorMessage("Password must At least 1 uppercase letter !")
            }
            if (!checkLowerLetter.test(password)) {
                  return setErrorMessage("Password must At least 1 lowercase letter !")
            }
            signUp(email, password)
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        logout()
                        updateUserProfile(name, photo)
                              .then(() => {
                                    toast.success("Registration Successfully. Please Login your Account !")
                                    navigate('/login')
                              })
                  }).catch(err => {
                        const error = err.message;
                        const modifiedErr = error.slice(22)
                        toast.error(modifiedErr)
                        console.log(err.message)
                  })
      }
      const handleGoogle = () => {
            googleLogin()
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        logout()
                        updateUserProfile()
                              .then(() => {
                                    toast.success("Registration Successfully. Please Login your Account !")
                                    navigate('/login')
                              })
                  }).catch(err => {
                        const error = err.message;
                        const modifiedErr = error.slice(22)
                        toast.error(modifiedErr)
                        console.log(err.message)
                  })
      }

      return (
            <>
                  <h2 className="font-bold text-3xl lg:text-4xl text-center py-7">Register to Your Account...</h2>
                  <div className="hero min-h-screen mb-8">
                        <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
                              <div className="w-full md:max-w-xl lg:max-w-3xl">
                                    <img src={registerImg} alt="" />
                              </div>
                              {/* Register Form */}
                              <div className="card w-full max-w-md shrink-0 shadow-xl">
                                    <form onSubmit={handleSubmit} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo URL</span>
                                                </label>
                                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control relative">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                                <button onClick={() => setShowPassword(!showPassword)} className='w-8 h-8 rounded-full hover:bg-gray-200 transition flex items-center justify-center absolute right-2 top-11'>
                                                      {showPassword ? <IoMdEye size={18} /> : <TbEyeClosed />}
                                                </button>
                                          </div>
                                          {/* Password Error */}
                                          {
                                                errorMessage && <p className="text-red-500 font-semibold text-sm flex items-center gap-1">
                                                      <MdReportGmailerrorred size={18} /> {errorMessage}</p>
                                          }
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Register</button>
                                          </div>
                                          <div className="border border-b relative text-center my-5">
                                                <span className='absolute -top-3 bg-white px-4'>OR</span>
                                          </div>
                                          <div className="form-control">
                                                <button onClick={handleGoogle} className='flex items-center justify-center gap-3 px-4 rounded-lg border-2 font-bold h-12'>
                                                      <FcGoogle size={22} />
                                                      Sign up with Google
                                                </button>
                                          </div>
                                    </form>
                                    <div className='text-center w-11/12 mx-auto pb-8'>
                                          <p className='text-gray-500 font-semibold'>Already have an account ? <Link to='/login' className='text-primary'>Login</Link></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Register