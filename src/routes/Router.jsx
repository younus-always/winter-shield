import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import Campaigns from "../pages/Campaigns";
import HowtoHelp from "../pages/HowtoHelp";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Private from "./Private";
import Details from "../pages/Details";
import ForgetPassword from "../components/FogetPassword";
import UpdateProfile from "../components/UpdateProfile";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/donationCampaigns',
                        element: <Campaigns />,
                        loader: () => fetch('/campaigns.json')
                  },
                  {
                        path: '/details/:id',
                        element: <Private><Details /></Private>,
                        loader: async ({ params }) => {
                              const res = await fetch('campaigns.json');
                              const data = await res.json();
                              const singleData = data.find(d => d.id === Number(params.id));
                              return singleData;
                        }
                  },
                  {
                        path: '/howtohelp',
                        element: <HowtoHelp />
                  },
                  {
                        path: '/dashboard',
                        element: <Private><Dashboard /></Private>
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/forget-password',
                        element: <ForgetPassword />
                  },
                  {
                        path: '/update-profile',
                        element: <Private><UpdateProfile /></Private>
                  }
            ],
      }
])

export default router