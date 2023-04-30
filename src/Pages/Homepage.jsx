import Navbar from "../Components/Navbar";
import Breadcrumb from "../Components/Breadcrumb";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import data from '../Data/restaurant-card.json';

import React, { useState, useEffect } from "react";
import { CSVLink, CSVDownload } from "react-csv";



function Homepage(){

        /* Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            //createBody(smiles)      //Creo il body con i giusti parametri
            const apiResponse = fetchData(body);
            const result = Promise.resolve(apiResponse);
    
            result.then((value) => {
            if (value.Data?.SMILES !== undefined) {
                setpredictedLogP(value.Data);
                //console.log(value.Data);
            } else {
                setpredictedLogP(undefined);
            }
            });
        }, []);
        */

        const csvData = [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
          ];


    return <>
        <Navbar />
        <Carousel />

        <form class="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cerca per ristorante o cucina" />
            </div>
            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Cerca per ristorante o cucina</span>
            </button>
        </form>

        <Breadcrumb previousPage="Pagina precedente" previousLink="/precedente" currentPage="Pagina corrente" />

        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {data.ristoranti.map((restaurant) => {
                return (
                <React.Fragment key={restaurant.id}>
                    <Card img={restaurant.img} nome={restaurant.nome} filtro={restaurant.filtro} costi={restaurant.costo} />
                </React.Fragment>
                )
            })}
        </div>


        <CSVLink data={csvData}   filename={"my-file.csv"} className="cta primary">Download me</CSVLink>






      


    
    </>
}

export default Homepage;