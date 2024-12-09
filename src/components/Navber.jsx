import { useContext, useState } from "react"
import { FaRegCircleUser } from "react-icons/fa6"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { authContext } from "../provider/AuthProvider"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"

const Navber = () => {
      const { user, logout } = useContext(authContext)
      const navigate = useNavigate()
      const [showMenu, setShowMenu] = useState(false)

      const handleSignOut = () => {
            logout();
      }

      const links = <>
            <li className="font-bold text-gray-100"><NavLink className="block py-2 px-5 rounded-xl bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/'>Home</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block py-2 px-5 rounded-xl bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/donationCampaigns'>Donation Campaigns</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block py-2 px-5 rounded-xl bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/howTohelp'>How to Help</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block py-2 px-5 rounded-xl bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/dashboard'>Dashboard</NavLink></li>
      </>
      const responsiveLinks = <>
            <li className="font-bold text-gray-100"><NavLink className="block w-full py-2 px-5 rounded-lg bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/'>Home</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block w-full py-2 px-5 rounded-lg bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/donationCampaigns'>Donation Campaigns</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block w-full py-2 px-5 rounded-lg bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/howTohelp'>How to Help</NavLink></li>
            <li className="font-bold text-gray-100"><NavLink className="block w-full py-2 px-5 rounded-lg bg-prime/60 hover:text-secon hover:bg-prime transition ease-in-out" to='/dashboard'>Dashboard</NavLink></li>
      </>

      return (
            <header className="bg-footer/70 backdrop-blur-xl sticky top-0 z-50">
                  <nav className="w-11/12 lg:max-w-6xl mx-auto py-5 flex items-center justify-between">

                        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-secon">
                              {
                                    showMenu
                                          ? <RiCloseFill size={20} />
                                          : <HiOutlineMenuAlt1 size={20} />
                              }
                        </button>
                        {/* mobile menu */}
                        <ul className={`lg:hidden bg-footer/80 backdrop-blur-md p-6 w-11/12 sm:w-8/12 md:w-6/12 space-y-2 absolute ${showMenu ? "left-0 opacity-100" : "-left-full opacity-0"} top-20 transition duration-500 ease-in-out rounded-br-lg`}>
                              {responsiveLinks}
                        </ul>

                        <h2 className="font-bold text-2xl"><Link to='/'>Winter Shield</Link></h2>
                        <ul className="hidden lg:flex items-center gap-3">
                              {links}
                        </ul>
                        <div className="flex items-center gap-4">
                              <div onClick={() => navigate('/update-profile')} className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-gray-200 hover:bg-secon">
                                    {
                                          user && user.email
                                                ? <img src={user?.photoURL} alt="user-photo" className="rounded-full w-full h-full bg-cover bg-top" />
                                                : <FaRegCircleUser size={24} />
                                    }

                              </div>
                              {/* Condition Login or Logout */}
                              {user && user.email
                                    ? <button onClick={handleSignOut} className="py-2 px-4 font-bold bg-secon/90 hover:bg-secon rounded-lg">Logout</button>
                                    : <button className="py-2 px-4 font-bold bg-secon/90 hover:bg-secon rounded-lg"><Link to='/login'>Login</Link></button>
                              }
                        </div>
                  </nav>
            </header>
      )
}

export default Navber