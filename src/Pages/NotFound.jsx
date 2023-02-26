function NotFound(){
    return <>
    <section className="flex items-center h-full p-16 py-60">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-500">
                    404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Questa pagina non esiste.</p>
                <p className="mt-4 mb-8">Ma non preoccuparti, puoi tornare alla homepage da qui.</p>
                <a href="/" className="cta primary">Torna homepage</a>
            </div>
        </div>
    </section>
    </>
}

export default NotFound;