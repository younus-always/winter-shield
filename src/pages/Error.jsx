import { Link } from "react-router-dom"
import errorImage from '../assets/error.svg'

const Error = () => {
      return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                  <div>
                        <img src={errorImage} alt="" className="h-[500px]" />
                  </div>
                  <button className="py-2 px-5 rounded-lg font-bold bg-[#68e1fc] text-slate-800 animate-bounce ">
                        <Link to={-1}>Go Back</Link>
                  </button>
            </div>
      )
}

export default Error