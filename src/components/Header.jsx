import { useLocation, useNavigate } from "react-router";

export default function Header() {

    const location = useLocation()
    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }
    const navigate = useNavigate()
    
  return (
    <>
      <div className="max-w-full py-3 shadow-md sticky top-0 z-50 bg-white px-4">
        <div className="flex items-center justify-between mx-auto sm:max-w-[80%] max-w-full">

          <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
            <img className="h-5 mr-1" src="logo.png" alt="" />
            <p className="text-lg font-semibold capitalize">mango realtor</p>
          </div>

          <div className="flex items-center space-x-10">
            <p 
            onClick={() => navigate('/')} 
            className={`cursor-pointer py-1 px-3 rounded-md text-sm font-semibold text-gray-500 ${pathMatchRoute("/") && "bg-gray-600 text-white"}`}
            >Home
            </p>
            <p 
            onClick={() => navigate('/offers')} 
            className={`cursor-pointer py-1 px-3 rounded-md text-sm font-semibold text-gray-500 ${pathMatchRoute("/offers") && "bg-gray-600 text-white"}`}
            >Offers
            </p>
            <p 
            onClick={() => navigate('/sign-in')} 
            className={`cursor-pointer py-1 px-3 rounded-md text-sm font-semibold text-gray-500 ${pathMatchRoute("/sign-in") && "bg-gray-600 text-white"}`}
            >Sign in
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
