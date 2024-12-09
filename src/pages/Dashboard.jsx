import { useContext } from "react"
import useTitle from "../hook/useTitle"
import { authContext } from "../provider/AuthProvider"

const Dashboard = () => {
      useTitle("Dashboard")
      const { user } = useContext(authContext)
      const { displayName, photoURL, email, phoneNumber } = user || {};

      return (
            <section className="w-11/12 max-w-6xl mx-auto min-h-screen py-12 lg:py-16">
                  <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
                              {
                                    displayName.includes("Ms.")
                                          ? `Welcome  ${displayName}`
                                          : displayName.includes("Md.")
                                                ? `Welcome  ${displayName}`
                                                : `Welcome  ${displayName}`
                              }
                        </h2>

                        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                              <figure>
                                    <img src={photoURL} alt={`${displayName} 'photo'`} className="w-full h-96 rounded-2xl bg-no-repeat bg-cover" />
                              </figure>
                              <div className="py-5 font-medium space-y-2">
                                    <p className="text-lg"><strong>Name:</strong> {displayName}</p>
                                    <p className="text-lg"><strong>Email:</strong> {email}</p>
                                    <p className="text-lg"><strong>Phone Number:</strong> {phoneNumber || 'N/A'}</p>
                              </div>
                        </div>
                  </div >
            </section >
      )
}

export default Dashboard