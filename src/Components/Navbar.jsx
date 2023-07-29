import logo from "../Image/logo.png";

function Navbar(){

    return <>
        
<nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b-2 border-[#032B36] shadow">
  <div className="container mx-auto flex justify-center items-center">
    <a href="/" className="flex items-center">
      <img src={logo} className="h-8 md:h-12 mr-5 sm:h-9" alt={process.env.REACT_APP_NAME} />
      <span className="self-center text-3xl md:text-4xl font-semibold whitespace-nowrap logoText">
        {process.env.REACT_APP_NAME}
      </span>
    </a>
  </div>
</nav>

    </>
}

export default Navbar;