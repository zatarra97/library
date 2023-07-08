import logo from "../Image/logo.png";

function Navbar(){

    return <>
        
      <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container mx-auto justify-center text-center">
          <a href="/" className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt={process.env.REACT_APP_NAME} />
              <span className="self-center text-xl font-semibold whitespace-nowrap" style={{color: "#430931"}}>{process.env.REACT_APP_NAME}</span>
          </a>
        </div>
      </nav>




  



    </>
}

export default Navbar;