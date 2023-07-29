function Success(){
    return <>
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-4 mx-auto pb-20 pt-32 lg:py-60 ">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>

                            <span className="sr-only">Success</span>
                        </div>

                        <p className="mb-4 text-2xl font-semibold text-green-500 dark:text-white text-center">Prenotazione avvenuta con successo.</p>
                        <p className="mb-4 text-md text-gray-900 dark:text-white text-center">Puoi consultarla nella sezione&nbsp;<a className="underline font-semibold" href="/profilo/prenotazioni">prenotazioni</a>  
                            <br />del tuo profilo personale.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Success;