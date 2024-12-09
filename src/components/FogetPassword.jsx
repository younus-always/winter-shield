import { useLocation } from "react-router-dom";
import useTitle from "../hook/useTitle";


const FogetPassword = () => {
      useTitle("Forget Password")
      const location = useLocation();
      const emailFromLogin = location.state?.email || '';

      const handleResetPassword = () => {
            window.location.href = 'https://mail.google.com';
      };

      return (
            <section className="w-11/12 max-w-6xl mx-auto py-12">
                  <div className="max-w-lg mx-auto shadow-lg rounded-lg p-6">
                        <h1 className="text-xl font-bold mb-3">Forgot Password</h1>
                        <form className="space-y-2">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email'
                                          defaultValue={emailFromLogin} placeholder="email" className="input input-bordered" required />
                              </div>
                              <button type="button" onClick={handleResetPassword} className="py-2 px-4 rounded-lg bg-red-500 text-slate-50 ">
                                    Reset Password
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default FogetPassword