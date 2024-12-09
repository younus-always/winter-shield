import { Outlet } from "react-router-dom"
import Navber from "../components/Navber"
import Footer from "../components/Footer"

const Layout = () => {
      return (
            <>
                  <Navber />
                  <main className="min-h-[calc(100vh-356px)]">
                        <Outlet />
                  </main>
                  <Footer />
            </>
      )
}

export default Layout