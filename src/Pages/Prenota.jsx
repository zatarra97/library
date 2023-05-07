import React, { useState } from "react";
import DatePicker from "react-datepicker";

import data from '../Data/commesse.json';

import "react-datepicker/dist/react-datepicker.css";

function Prenota() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedService, setSelectedService] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedServiceDuration, setSelectedServiceDuration] = useState("");

    function handleSelectService(service, duration){
        setSelectedService(service)
        setSelectedServiceDuration(duration)
    }

    function handleSelectService(service, duration){
        setSelectedService(service)
        setSelectedServiceDuration(duration)
    }

    function handleTimeClick(time, day){
        setSelectedTime(time)
        setSelectedDay(day)
    }
    
    // Imposta la data massima selezionabile a un mese a partire dalla data odierna
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    return (
        <div className="container mx-auto border mt-20">
            <h1 class="text-center font-bold text-3xl">Prenota il tuo servizio</h1>
            <div className="md:flex mx-auto py-12">

                <div className="border max-w-md px-5">
                    <h1 class="mt-5 font-semibold"> 1. Scegli il servizio e il giorno</h1>

                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-10" type="button">
                        {selectedService == "" ? "Seleziona il servizio" : selectedService}
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {data.servizi.map((servizio) => {
                            return (
                            <React.Fragment key={servizio.id}>
                                <li>
                                    <p onClick={() => handleSelectService(servizio.nome, servizio.durata)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{servizio.nome}</p>
                                </li>
                            </React.Fragment>
                            )
                        })}
                        </ul>
                    </div>

                    <div className="mt-5">
                        <DatePicker
                            selected={selectedDate}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()} // Disabilita le date precedenti alla data corrente
                            maxDate={maxDate} // Imposta la data massima selezionabile
                        />
                    </div>
                </div>
                <div className="border">

                <div class="relative overflow-x-auto shadow-md mt-5">
                    <h1 class="px-5 font-semibold">2. Seleziona l'orario che preferisci tra quelli disponibili</h1>
                    <div class="flex  mt-7">
                        <div class="flex ml-5">
                            <div class="p-3 bg-gray-200"></div>
                            <span>&nbsp;Disponibile</span>
                        </div>
                        <div class="flex ml-7">
                            <div class="p-3 bg-red-400"></div>
                            <span>&nbsp;Occupato</span>
                        </div>
                    </div>

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-md">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-5 py-3">
                                    Martedì
                                </th>
                                <th scope="col" class="px-5 py-3">
                                    Mercoledì
                                </th>
                                <th scope="col" class="px-5 py-3">
                                    Giovedì
                                </th>
                                <th scope="col" class="px-5 py-3">
                                    Venerdì
                                </th>
                                <th scope="col" class="px-5 py-3">
                                    Sabato
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('9:00', "lunedì")}>9:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label-disabled">9:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('9:00', "martedì")}>9:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('9:00')}>9:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('9:00')}>9:00</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('10:00')}>10:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('10:00')}>10:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('10:00')}>10:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label-disabled">10:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('10:00')}>10:00</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('11:00')}>11:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('11:00')}>11:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('11:00')}>11:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('11:00')}>11:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('11:00')}>11:00</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('12:00')}>12:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('12:00')}>12:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('12:00')}>12:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('12:00')}>12:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label" onClick={() => handleTimeClick('12:00')}>12:00</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-5 py-3">
                                    <span class="time-label">13:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label">13:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label">13:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label">13:00</span>
                                </td>
                                <td class="px-5 py-3">
                                    <span class="time-label">13:00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                </div>
                <div className="border max-w-md p-3">
                    <h1 class="mt-2 font-semibold">3. Resoconto</h1>
                    <p class="mt-3">Giorno: {selectedDay}</p>
                    <p>Orario: {selectedTime}</p>
                    <p>Servizio: {selectedService}</p>
                    <p>Durata s.: {selectedServiceDuration}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Prenota;