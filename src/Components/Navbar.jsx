import Cookies from 'js-cookie';
function Navbar(){
  let notLogged = true;
  const userEmailExists = Cookies.get('userEmail') !== undefined;

  if (userEmailExists) {
    // il cookie `userEmail` esiste
    notLogged = false;
  }

    return <>
        
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt={process.env.REACT_APP_NAME} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{process.env.REACT_APP_NAME}</span>
        </a>
        <div className="flex md:order-2 space-x-2">

          <div className="hidden lg:flex">
          {notLogged ? 
            <div className="space-x-2">
              <a href="/auth/login" className="cta primary">Accedi</a>
              <a href="/auth/registrati" className="cta primary">Registrati</a>
            </div>
            : 
            <><div className="flex cursor-pointer" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" >
              <img id="avatarButton" className="w-10 h-10 rounded-full cursor-pointer hidden md:block" type="button" src="https://picsum.photos/60/60" alt="User dropdown" />
                <p className="mt-2 pl-2">{ Cookies.get('userName') }</p>
              </div>
              <div id="userDropdown" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{ Cookies.get('userName') } { Cookies.get('userSurname') }</div>
                    <div className="font-medium truncate">{ Cookies.get('userEmail') }</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                      <a href="/account" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</a>
                    </li>
                    <li>
                      <a href="/ordini" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ordini</a>
                    </li>
                    <li>
                      <a href="/indirizzi" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Indirizzi consegna</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Esci</a>
                  </div>
              </div>
            </>
          }
          </div>
            
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="www.google.it" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="www.google.it" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="www.google.it" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="www.google.it" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            <div class="md:hidden">
            {notLogged ?
            <div class="mt-5 flex ">
              <li>
                <a href="/auth/login" className="cta primary ">Accedi</a>
              </li>
              <li>
                <a href="/auth/registrati" className="cta primary">Registrati</a>
              </li>
            </div>
            :
            <li>
              <a href="/auth/logout" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Esci</a>
            </li>
            }
            </div>
          </ul>
        </div>
        </div>
      </nav>

    </>
}

export default Navbar;