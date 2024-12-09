/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../pages/Loading"

const Private = ({ children }) => {
      const { user, loading } = useContext(authContext)
      const location = useLocation()

      if (loading) {
            return <Loading />
      }

      if (user && user.email) {
            return children
      }
      return <Navigate state={location.pathname} to='/login' />
}

export default Private