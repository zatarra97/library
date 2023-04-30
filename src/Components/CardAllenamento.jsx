function CardAllenamento(props){
    return <>

        <div className="border rounded-lg px-3 py-3 shadow">
            <h1 className="text-xl font-bold"><span className="text-blue-500">1. </span>Nome esercizio</h1>
            
            <div className="flex space-x-4 items-center justify-center mt-5">
                <div className="">
                    <div className="rounded-full bg-blue-500 p-1">
                        <svg className="text-white w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                        </svg>
                    </div>
                    <p className="">3</p>
                    <p className="text-xs">Serie</p>
                </div>

                <div className="">
                    <div className="rounded-full bg-blue-500 p-1">
                            <svg className="text-white w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"></path>
                        </svg>
                    </div>
                    <p className="">3</p>
                    <p className="text-xs">Reps</p>
                </div>

                <div className="">
                    <div className="rounded-full bg-blue-500 p-1">
                        <svg className="text-white w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="items-center justify-center"></div>
                    <p className="">3</p>
                    <p className="text-xs">Rec</p>
                </div>
                
            </div>

            
            <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-3 py-2">
                                Serie
                            </th>
                            <th scope="col" class="px-3 py-2">
                                Peso (Kg)
                            </th>
                            <th scope="col" class="px-3 py-2">
                                Ripetizioni
                            </th>
                            <th scope="col" class="px-3 py-2">
                                Rec.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-3 py-2">
                                1
                            </th>
                            <td class="px-3 py-2">
                                Silver
                            </td>
                            <td class="px-3 py-2">
                                Laptop
                            </td>
                            <td class="px-3 py-2">
                                <div className="rounded-full bg-blue-500 p-1 w-7">
                                    <svg className="text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-3 py-2">
                                2
                            </th>
                            <td class="px-3 py-2">
                                White
                            </td>
                            <td class="px-3 py-2">
                                Laptop PC
                            </td>
                            <td class="px-3 py-2">
                                <div className="rounded-full bg-blue-500 p-1 w-7">
                                    <svg className="text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-3 py-2">
                                3
                            </th>
                            <td class="px-3 py-2">
                                Black
                            </td>
                            <td class="px-3 py-2">
                                Accessories
                            </td>
                            <td class="px-3 py-2">
                                <div className="rounded-full bg-blue-500 p-1 w-7">
                                    <svg className="text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>

    </>
}

export default CardAllenamento;