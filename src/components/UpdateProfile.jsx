import { updateProfile } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { useNavigate } from "react-router-dom"
import useTitle from "../hook/useTitle"

const UpdateProfile = () => {
      useTitle("Update Profile")
      const navigate = useNavigate()

      const handleUpdate = e => {
            e.preventDefault()
            const form = new FormData(e.target)
            const name = form.get('name')
            const photo = form.get('photo')
            updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
                  .then(() => {
                        navigate('/dashboard')
                  })
      }

      return (
            <section className="w-11/12 max-w-6xl mx-auto py-12">
                  <div className="max-w-lg mx-auto shadow-lg rounded-lg p-6">
                        <h1 className="text-xl font-bold mb-3">Update Profile</h1>
                        <form onSubmit={handleUpdate} className="space-y-3">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name'
                                          placeholder="Enter Your Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo'
                                          placeholder="Photo URL" className="input input-bordered" required />
                              </div>
                              <button type="submit" className="py-2 px-4 rounded-lg bg-blue-700 text-slate-50">
                                    Update Information
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default UpdateProfile