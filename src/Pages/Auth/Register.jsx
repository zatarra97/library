import React from "react";
import Input from "../../Components/Forms/Input";

function Register(){
    return <>
            <section className="bg-gray-100 dark:bg-gray-900 py-20">
                <div className="flex flex-col items-center justify-center px-4 pt-8 mx-auto md:pt-20">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        {process.env.REACT_APP_NAME}   
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Registrati
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">

                                <Input id="name" type="text" label="Nome" />
                                <Input id="surname" type="text" label="Cognome" />
                                <Input id="phone" type="tel" label="Telefono" />
                                <Input id="email" type="email" label="Email" placeholder="name@company.com"/>
                                <Input id="password" type="password" label="Password" placeholder="••••••••"/>
                                <Input id="confirm-password" type="password" label="Conferma password" placeholder="••••••••"/>

                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrati</button>
                                
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Hai un account? <a href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Accedi</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
}

export default Register;