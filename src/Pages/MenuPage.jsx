import React from "react";

import data from '../Data/restaurant-menu.json';

function MenuPage(){
    return <>
    <div className="container mx-auto px-2 mt-40 md:flex">
        <div className="border w-full md:w-2/3">

            {data.categorie.map((categoria) => {
                return (
                    <React.Fragment key={categoria.id}>
                    <h1 className="text-2xl font-bold mt-5">{categoria.nome}</h1>

                    {categoria.piatti.map((piatto) => {
                        return (
                            <React.Fragment key={piatto.id}>
                            <div className="flex">
                                <div className="border w-4/5">
                                    <p className="font-bold">{piatto.nome}</p>
                                    <p>{piatto.descrizione}</p>
                                </div>
                                <div className="border w-1/5 flex justify-end">
                                    <div>
                                        <p className="font-bold mt-4 mr-3">€{piatto.costo}</p>
                                    </div>
                                    <div>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 mt-2">+</button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>)
                    })}
                </React.Fragment>)
            })}
            
        </div>

        <div className="border w-full md:w-1/3">
            <div className="border">
                <p className="px-6 font-bold">Preferisci la consegna a domicilio oppure il ritiro a mano?</p>
                <div className="border">
                    <div className="px-6">
                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-t-lg text-sm px-4 py-2.5 mr-2 mt-2">Consegna a domicilio</button>     
                        <button type="button" className="w-full text-dark bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-b-lg text-sm px-4 py-2.5 mr-2 mb-2">Ritiro a mano</button>                 
                    </div>
                </div>
                <div className="border"></div>
                <div className="px-6 flex">
                    <div className="border w-2/4 font-bold">
                        <p>Costo consegna</p>
                        <p>Subtotale</p>
                        <p>Totale</p>
                    </div>
                    <div className="border w-2/4 text-right">
                        <p>€1.5</p>
                        <p>€1.5</p>
                        <p>€1.5</p>
                    </div>
                </div>
            </div>
            
        </div>


    </div>
    </>
}

export default MenuPage;