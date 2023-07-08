import React, { useEffect, useState } from "react";
import axios from 'axios';
import csv from 'csvtojson';
import { BookCover } from 'book-cover-3d'
import loadingImage from "../Image/book.gif"

const PAGE_SIZE = 25;

const Books = () => {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);        //Stato della pagina corrente
  const [sortDirection, setSortDirection] = useState(null); // Stato per la direzione di ordinamento
  const [searchTerm, setSearchTerm] = useState('');         //Stato della ricerca
  const [loading, setLoading] = useState(false);            // Stato per il caricamento
  const [selectedGenre, setSelectedGenre] = useState(null); // Stato per il genere selezionato
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Stati navbar Smartphone
  const [serviceActive, setServiceActive] = useState(false);  
  const [service, setService] = useState("");  
  /*-------------------------------------------------------------
  *    EVENTI NAVBAR
  --------------------------------------------------------------*/

// Funzione per l'attivazione di un servizio
const handleServiceActive = (service) => () => {
  setServiceActive(!serviceActive);
  setService(service);
  console.log("Cambio status servizio selezionato: " + serviceActive);
  console.log("Servizio attivo: " + service);
};

const resetService = () => () => {
  setServiceActive(false);
  setService("");
  console.log("Cambio status servizio selezionato: " + serviceActive);
  console.log("Servizio resettato: " + service);
};






  /*-------------------------------------------------------------
  *    REPERIMENTO DATI
  --------------------------------------------------------------*/
  useEffect(() => {
    setLoading(true); // Inizia il caricamento
    const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1AM4tKpgKwUOdmUvx0pgGgNbiOU8wCskom1Voi98tagE/export?format=csv';

    axios
      .get(SPREADSHEET_URL)
      .then(response => {
        const csvData = response.data;
        csv()
          .fromString(csvData)
          .then(jsonData => {
            setBooks(jsonData);
            setLoading(false); // Termina il caricamento
          })
          .catch(err => {
            console.error('Error converting CSV to JSON:', err);
            setLoading(false); // Termina il caricamento in caso di errore
          });
      })
      .catch(err => {
        console.error('Error fetching the book list:', err);
        setLoading(false); // Termina il caricamento in caso di errore
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*-------------------------------------------------------------
  *   FILTRAGGIO / RICERCA DATI
  --------------------------------------------------------------*/

    // Filtra i libri in base al genere selezionato e al termine di ricerca
    const filteredBooks = books.filter(book => {
      const title = book.TITOLO.toUpperCase();
      const term = searchTerm.toUpperCase();
      return title.includes(term) && (selectedGenre ? book.GENERE === selectedGenre : true);
    });


    const booksForCurrentPage = filteredBooks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    const totalPages = Math.ceil(filteredBooks.length / PAGE_SIZE);


    // Gestore per gli aggiornamenti del genere selezionato
    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
      setCurrentPage(1);  //Torna alla prima pagina

      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Opzionale: anima lo scorrimento
      });
    };

    // Ottieni un array unico di generi
    const genres = [...new Set(books.map(book => book.GENERE))];

    // Gestore per gli aggiornamenti dell'input di ricerca
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1);  //Torna alla prima pagina
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Opzionale: anima lo scorrimento
      });
    };

    //Funzione che gestisce l'ordinamento
    const handleSort = () => { // Nuova funzione di ordinamento
      const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc'; // Inverti la direzione di ordinamento ogni volta che viene premuto il pulsante
      setSortDirection(newSortDirection);
  
      const sortedBooks = [...books].sort((a, b) => {
        const aTitle = a.TITOLO.toUpperCase(); // Ignora maiuscole/minuscole
        const bTitle = b.TITOLO.toUpperCase(); // Ignora maiuscole/minuscole
  
        if (newSortDirection === 'asc') {
          return aTitle < bTitle ? -1 : 1; // Ordinamento ascendente
        } else {
          return aTitle > bTitle ? -1 : 1; // Ordinamento discendente
        }
      });
      setCurrentPage(1);  //Torna alla prima pagina
      setBooks(sortedBooks);
    };

    //Funzione che gestisce l'ordinamento Smartphone
    const handleSpecificSort = (event) => { // Nuova funzione di ordinamento
      var order = event.target.value;
      setSortDirection(order);
  
      const sortedBooks = [...books].sort((a, b) => {
        const aTitle = a.TITOLO.toUpperCase(); // Ignora maiuscole/minuscole
        const bTitle = b.TITOLO.toUpperCase(); // Ignora maiuscole/minuscole
  
        if (order === 'asc') {
          return aTitle < bTitle ? -1 : 1; // Ordinamento ascendente
        } else {
          return aTitle > bTitle ? -1 : 1; // Ordinamento discendente
        }
      });
      setCurrentPage(1);  //Torna alla prima pagina
      setBooks(sortedBooks);
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Opzionale: anima lo scorrimento
      });
      
    };



    /*-------------------------------------------------------------
    *   IMPAGINAZIONE DEI DATI
    --------------------------------------------------------------*/

      const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);

      //Funzione che gestisce il cambio pagina
      const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // Opzionale: anima lo scorrimento
          });
        }

      };



    return (
      <>
      <div className=" bg-slate-100">
        <div className="hidden md:block flex flex-wrap mx-auto container py-16 md:py-20 md:justify-center">
            
            {/*Ordinamento asc/desc */}
            <button className="rounded flex bg-blue-500 py-2 px-5 text-white mt-3 mx-4" onClick={handleSort}>
                Ordina titoli&nbsp;
                {sortDirection !== 'desc'  ?    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                  </svg>
                }
            </button>


            {/* Filtro per genere */}
            <div className="w-1/3 mx-4 mt-3">
              <select 
                className="w-full  rounded border"
                value={selectedGenre || ''}
                onChange={handleGenreChange}
              >
                <option value="">Seleziona un genere...</option>
                {genres.map(genre => (
                  <option className="cursor-pointer" key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Ricerca dettagliata */}
            <div className="w-1/3 mx-4 mt-3" >
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full pt-3 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cerca un libro" value={searchTerm} onChange={handleSearchChange}/>
              </div>
            </div>

          </div>


          {/* Card libri */}
            {loading ?
              <div className="text-center justify-center pt-32 md:pt-0" >
                <div className="text-center justify-center border mx-auto rounded-full overflow-hidden w-80">
                  <img className="text-center justify-center w-80 mx-auto" src={loadingImage} alt="loading" />
                </div>
                  
                <p className="text-3xl mt-5 font-bold px-4">
                  Caricamento libri in corso...
                </p>
              </div>
              
            :
              <div className="flex flex-wrap mx-auto container pt-20 md:pt-5">

                {booksForCurrentPage.map((book, index) => (
                  <div key={index} className={`w-6/12 md:w-1/3 lg:1/4 xl:w-1/5 p-4 mx-auto sm:mx-0 md:max-w-[420px]${windowWidth <= 420 ? 'max-w-[180px]' : 'max-w-[210px]'}`}>
                    <div className="flex justify-center mt-3 md:mt-10">
                      {/*<img className="" src={`https://via.placeholder.com/150x220?text=${book.TITOLO.replace(/ /g, '+')}`} alt="libro" />*/}
                      <BookCover rotate={25} width={windowWidth <= 420 ? 130 : 160} height={windowWidth <= 420 ? 175 : 220} bgColor="#213242">
                      <div>
                        <div className={`${windowWidth <= 420 ? 'min-h-[110px]' : 'min-h-[140px]'}`}>
                          <p className="text-white text-center md:text-lg mt-2 pt-1 line-clamp-4 px-2">{book.TITOLO} </p>
                        </div>
                        <p className={`text-white text-center relative text-sm line-clamp-1 ${windowWidth <= 420 ? 'mt-5' : 'mt-10'}`}>{book['CASA EDITRICE']}</p>
                      </div>
                      </BookCover>
                    </div>
                    <p className="font-bold text-center mt-4">{book.TITOLO}</p>
                    <p className="text-center text-sm"><span className="text-slate-700">di </span><span className="font-semibold">{book.AUTORE}</span></p>
                    
                    <div className="items-center text-center">
                    {book['DISPONIBILITÀ'].toLowerCase() !== "in prestito" ?
                      <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                          Disponibile
                      </span>
                    :
                      <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                          <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                          Non disponibile
                      </span>
                    }
                    </div>

                  </div>
                ))}
              </div>
            }
      


        {/*Paginazione */}
        <nav className="container mx-auto text-center py-20 px-4" aria-label="Page navigation example">
          <ul className="inline-flex flex-wrap items-center -space-x-px">
            <li>
              <button className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => goToPage(currentPage - 1)}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </button>
            </li>
            {pageNumbers.map(page => (
              <li key={page} >
                <button 
                  className={`
                    px-3 py-2 leading-tight 
                    ${page === currentPage ? 'text-blue-600 bg-blue-50 border border-blue-300' : 'text-gray-500 bg-white border border-gray-300'} 
                    hover:bg-gray-100 hover:text-gray-700 
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  `} 
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => goToPage(currentPage + 1)}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </button>
            </li>
          </ul>
        </nav>


  {/* Navbar Smartphone */}
  <div class="md:hidden fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
    {!serviceActive ? 
      <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
          <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-l-full " onClick={handleServiceActive("order")}>
          <svg class="w-5 h-6 text-white"  fill="#525252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.219 301.219" >
              <path d="M159.365 23.736v-10c0-5.523-4.477-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.523 0 10-4.477 10-10zM130.586 66.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h120.586c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM111.805 129.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h101.805c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM93.025 199.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM74.244 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM298.29 216.877l-7.071-7.071a10.001 10.001 0 0 0-14.143 0l-34.393 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.523 0-10 4.477-10 10v225.462l-34.393-34.393a10.003 10.003 0 0 0-14.142 0l-7.072 7.071c-3.904 3.905-3.904 10.237 0 14.142l63.536 63.536a9.968 9.968 0 0 0 7.071 2.929 9.966 9.966 0 0 0 7.071-2.929l63.536-63.536c3.905-3.905 3.905-10.237 0-14.141z"/>
          </svg>

            <span class="sr-only">Ordina</span>
          </button>

          <div class="flex items-center justify-center">
              <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full " onClick={handleServiceActive("search")}>
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99a1 1 0 101.42-1.42l-4.99-5zm-6 0a4.5 4.5 0 110-9a4.5 4.5 0 010 9z" />
                </svg>
              </button>
          </div>

          <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 " onClick={handleServiceActive("filter")}>
              <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              <span class="sr-only">Filtri</span>
          </button>
      </div>
      :
      /*Sezione di ricerca */
      service == "search" ?
        <div className="flex w-full">

          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-gray-400 hover:bg-gray-500 rounded-full mt-1.5 mx-2 min-w-[40px] text-white" onClick={resetService()}>
            <svg className="w-6 h-6 text-white rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <div className="relative mt-2 w-full">
            <input type="search" id="default-search" className="block w-full pt-2.5 px-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cerca un titolo" value={searchTerm} onChange={handleSearchChange}/>
          </div>

          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-blue-600 rounded-full mt-1.5 mx-2 min-w-[40px]">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99a1 1 0 101.42-1.42l-4.99-5zm-6 0a4.5 4.5 0 110-9a4.5 4.5 0 010 9z" />
            </svg>
          </button>
        </div>
        :
        /*Sezione filtri */
        service == "filter" ?
        <div className="flex w-full h-56">
          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-gray-400 hover:bg-gray-500 rounded-full mt-1.5 mx-2 min-w-[40px] text-white" onClick={resetService()}>
            <svg className="w-6 h-6 text-white rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <div className="relative mt-2 w-full">
          <select 
                className="block w-full pt-2.5 px-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                value={selectedGenre || ''}
                onChange={handleGenreChange}
              >
                <option value="">Seleziona un genere...</option>
                {genres.map(genre => (
                  <option className="cursor-pointer" key={genre} value={genre}>{genre}</option>
                ))}
          </select>
          </div>

          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-blue-600 rounded-full mt-1.5 mx-2 min-w-[40px]">
          <svg class="w-6 h-6 mb-1 text-white  group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
          </button>
        </div>
        :
        <div className="flex w-full h-56">
          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-gray-400 hover:bg-gray-500 rounded-full mt-1.5 mx-2 min-w-[40px] text-white" onClick={resetService()}>
            <svg className="w-6 h-6 text-white rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <div className="relative mt-2 w-full">
          <select 
                className="block w-full pt-2.5 px-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                value={sortDirection || ''}
                onChange={handleSpecificSort}
              >
                <option value="">Ordina i risultati</option>
                <option className="cursor-pointer"  value="asc">Discendente A-Z</option>
                <option className="cursor-pointer"  value="desc">Ascendente Z-A</option>
          </select>
          </div>

          <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center h-10 font-medium bg-blue-600 rounded-full mt-1.5 mx-2 min-w-[40px]">
          <svg className="w-4 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.219 301.219">
            <path fill="#ffffff" d="M159.365 23.736v-10c0-5.523-4.477-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.523 0 10-4.477 10-10zM130.586 66.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h120.586c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM111.805 129.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h101.805c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM93.025 199.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM74.244 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM298.29 216.877l-7.071-7.071a10.001 10.001 0 0 0-14.143 0l-34.393 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.523 0-10 4.477-10 10v225.462l-34.393-34.393a10.003 10.003 0 0 0-14.142 0l-7.072 7.071c-3.904 3.905-3.904 10.237 0 14.142l63.536 63.536a9.968 9.968 0 0 0 7.071 2.929 9.966 9.966 0 0 0 7.071-2.929l63.536-63.536c3.905-3.905 3.905-10.237 0-14.141z" />
          </svg>
          </button>
        </div>
    }
  </div>
</div>
      </>
    );
}


export default Books;
