import Axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from "react";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await Axios.post('http://localhost:3001/login', {username, password});
        console.log(response.data);

        if (response.data['0'].email != undefined){
            Cookies.set('userEmail', response.data['0'].email);
            Cookies.set('userName', response.data['0'].name);
            Cookies.set('userSurname', response.data['0'].surname);
            window.location.replace("/");
        }
        
      } catch (error) {
        console.error(error);
        alert('Si è verificato un errore durante l\'invio dei dati');
      }
    };

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        console.log("Accesso con Google in corso...");
        // Aggiungi qui la logica per gestire l'accesso con Google
    };

    return <>
            <section className="bg-gray-100 dark:bg-gray-900 py-20">
                <div className="flex flex-col items-center justify-center px-4 pt-8 mx-auto md:pt-20 ">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        {process.env.REACT_APP_NAME} 
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Accedi al tuo account
                            </h1>
                            <form className="space-y-4 md:space-y-4" action="#">

                                <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input value={username} onChange={handleUsernameChange} type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required/> 

                                <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required/> 

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <a href="/auth/password-dimenticata" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Password dimenticata?</a>
                                    </div>
                                </div>

                                <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Accedi</button>
                            
                            </form>

                            <button type="submit" onClick={handleGoogleLogin} className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-700">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" className="inline-block w-4 h-4 mr-2"/> 
                                    Accedi con Google
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Non hai un account? <a href="/auth/registrati" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrati</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
}

export default Login;