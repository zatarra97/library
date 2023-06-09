import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios';
import moment from "moment";
import data from '../Data/commesse.json';
import disponibilita from '../Data/disponibilita.json';
import prenotazioni from '../Data/prenotazioni.json';
import "react-datepicker/dist/react-datepicker.css";



function Prenota() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedService, setSelectedService] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedServiceDuration, setSelectedServiceDuration] = useState("");
    const [services, setServices] = useState([]);

    const { apertura, chiusura, pausa_pranzo, giorni_chiusura } = disponibilita;

    const aperturaMoment = moment(apertura, "HH:mm");
    const chiusuraMoment = moment(chiusura, "HH:mm");
    const diffMinutes = chiusuraMoment.diff(aperturaMoment, "minutes");

    function handleSelectService(service, duration){
        setSelectedService(service)
        setSelectedServiceDuration(duration)
    }

    function handleTimeClick(time, day) {
        const formattedDate = moment(selectedDate).add(getDaysToShow().indexOf(day), "days").format("DD/MM/YYYY");
        const selectedFullDate = `${formattedDate} ${time}`;
        setSelectedDay(selectedFullDate);
        setSelectedTime(time);
      }

    //  Funzione che gestisce la data seleziona nel date-picker
    function handleDateChange(date) {
        setSelectedDate(date);

        const giornoSettimana = moment(date).format("dddd");
        //alert(`Hai selezionato il giorno: ${giornoSettimana}`);
    }

    // Funzione per verificare se un giorno è chiuso
    function isGiornoChiusura(giorno) {
        return giorni_chiusura.includes(giorno.toLowerCase());
    }

    // Funzione per verificare se un orario è durante la pausa pranzo
    function isPausaPranzo(ora) {
        return moment(ora, "HH:mm").isBetween(moment(pausa_pranzo.inizio, "HH:mm"), moment(pausa_pranzo.fine, "HH:mm"), null, '[)');
    }

    // Funzione per ottenere l'elenco dei giorni da visualizzare nella tabella
    function getDaysToShow() {
        const selectedDay = moment(selectedDate).format("dddd");
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const selectedDayIndex = daysOfWeek.indexOf(selectedDay.toLowerCase());

        return daysOfWeek.slice(selectedDayIndex, selectedDayIndex + 3);
    }

    // Funzione che controlla gli orari disponibili sulle prenotazioni già ricevute 
    function isTimeBooked(date, time) {
        const bookingExists = prenotazioni.prenotazioni.some((prenotazione) => {
            if (prenotazione.data === date) {
                const bookingStartTime = moment(prenotazione.ora, "HH:mm");
                const bookingEndTime = moment(prenotazione.ora, "HH:mm").add(prenotazione.durata, "minutes");
                const checkTime = moment(time, "HH:mm");
                return checkTime.isBetween(bookingStartTime, bookingEndTime, null, '[)');
            }
            return false;
        });
        return bookingExists;
    }

    //Funzione che controlla se la durata del servizio selezionato può essere soddisfatta dagli orari disponibili
    function isSlotDisponibile(ora, giorno) {
        const oraMoment = moment(ora, "HH:mm");
        const durataServizio = parseInt(selectedServiceDuration);
    
        for (let i = 0; i < durataServizio / 30; i++) {
            const oraControllo = oraMoment.clone().add(i * 30, "minutes").format("HH:mm");
            
            if (isOrarioPrenotato(oraControllo, giorno) || isPausaPranzo(oraControllo)) {
                return false;
            }
        }
    
        return true;
    }

    function isOrarioPrenotato(ora, giorno) {
        const formattedDate = moment(selectedDate).add(getDaysToShow().indexOf(giorno), "days").format("DD/MM/YYYY");
        const selectedFullDate = `${formattedDate} ${ora}`;
    
        return prenotazioni.prenotazioni.some(prenotazione => {
            const prenotazioneFullDate = `${prenotazione.data} ${prenotazione.ora}`;
            const prenotazioneEndFullDate = moment(prenotazioneFullDate, "DD/MM/YYYY HH:mm").add(prenotazione.durata, 'minutes').format("DD/MM/YYYY HH:mm");
            
            return moment(selectedFullDate, "DD/MM/YYYY HH:mm").isBetween(moment(prenotazioneFullDate, "DD/MM/YYYY HH:mm"), moment(prenotazioneEndFullDate, "DD/MM/YYYY HH:mm"));
        });
    }
    
    // Imposta la data massima selezionabile a un mese a partire dalla data odierna
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);

    //Chiamo l'API per ricevere i servizi disponibili
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/getServices');
            setServices(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
            alert('Si è verificato un errore durante l\'invio dei dati');
          }
        };
      
        fetchData();
      }, []);
    
    return (
        <div className="container mx-auto border mt-20">
            <h1 className="text-center font-bold text-3xl">Prenota il tuo servizio</h1>
            <div className="md:flex mx-auto py-12">

                <div className="border max-w-md px-5">
                    <h1 className="mt-5 font-semibold"> 1. Scegli il servizio e il giorno</h1>

                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-10" type="button">
                        {selectedService == "" ? "Seleziona il servizio" : selectedService}
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {data.servizi.map((servizio) => (
                            <li key={servizio.id}>
                                <p onClick={() => handleSelectService(servizio.nome, servizio.durata)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {servizio.nome}
                                </p>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-5">
                        <DatePicker
                            selected={selectedDate}
                            dateFormat="dd/MM/yyyy"
                            onChange={handleDateChange}
                            minDate={new Date()} // Disabilita le date precedenti alla data corrente
                            maxDate={maxDate} // Imposta la data massima selezionabile
                        />
                    </div>
                </div>
                <div className="border">
                {selectedService && (
                <div className="relative overflow-x-auto shadow-md mt-5">
                    <h1 className="px-5 font-semibold">2. Seleziona l'orario che preferisci tra quelli disponibili</h1>
                    <div className="flex  mt-7">
                        <div className="flex ml-5">
                            <div className="p-3 bg-green-400"></div>
                            <span>&nbsp;Disponibile</span>
                        </div>
                        <div className="flex ml-7">
                            <div className="p-3 bg-red-400"></div>
                            <span>&nbsp;Occupato</span>
                        </div>
                    </div>

{/* Generazione dinamica della tabella degli orari disponibili */}
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-md">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      {getDaysToShow().map((giorno) => {
        const formattedDate = moment(selectedDate).add(getDaysToShow().indexOf(giorno), "days").format("ddd DD/MM");
        return (
          <th key={giorno} scope="col" className="px-5 py-3">
            {formattedDate}
          </th>
        );
      })}
    </tr>
  </thead>
  <tbody>
        {[...Array(diffMinutes / 30 + 1)].map((_, index) => {
        const minutesToAdd = index * 30;
        const ora = aperturaMoment.clone().add(minutesToAdd, "minutes").format("HH:mm");
      const isDuringPausaPranzo = isPausaPranzo(ora);

      return (
        <tr key={ora} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
            isDuringPausaPranzo ? "cursor-not-allowed" : ""
        }`}>
        {getDaysToShow().map((giorno) => {
            const formattedDate = moment(selectedDate).add(getDaysToShow().indexOf(giorno), "days").format("DD/MM/YYYY");
            const isBooked = isTimeBooked(formattedDate, ora);
            return (
                <td key={giorno} className="px-5 py-3">
                    <span 
                    className={
                        isGiornoChiusura(giorno) || isPausaPranzo(ora) ? "time-label-disabled cursor-not-allowed" : 
                        isSlotDisponibile(ora, giorno) ? "time-label-available" : 
                        "time-label-disabled cursor-not-allowed" 
                    } 
                    onClick={
                        !isGiornoChiusura(giorno) && !isPausaPranzo(ora) && isSlotDisponibile(ora, giorno) ? () => handleTimeClick(ora, giorno) : 
                        null
                    }
                    >
                    {ora}
                    </span>
                </td>
            );
        })}
        </tr>
      );
    })}
  </tbody>
</table>
                </div>
)}
                </div>
                <div className="border max-w-md p-3">
                    <h1 className="mt-2 font-semibold">3. Resoconto</h1>
                    <p className="mt-3">Giorno: {selectedDay}</p>
                    <p>Orario: {selectedTime}</p>
                    <p>Servizio: {selectedService}</p>
                    <p>Durata s.: {selectedServiceDuration}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Prenota;