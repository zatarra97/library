import { BookCover } from 'book-cover-3d'
import React, { useEffect, useState } from "react";



function NewBook(){


    const [title, setTitle] = useState("Titolo");

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    const [editore, setEditore] = useState("Editore");

    function handleEditoreChange(event) {
        setEditore(event.target.value);
    }

    return <>
        <section className="mt-20 flex pt-10 mx-auto container justify-center pb-20">
            <div className="border px-20">
                <BookCover rotate={25} width={250}    thickness={90}  height={320} bgColor="#032B36">
                    <div className='min-h-[250px]'>
                        <p className="text-white text-center md:text-2xl mt-2 pt-1 line-clamp-4 px-2">{title} </p>
                    </div>
                    <p className='text-white text-center relative text-sm line-clamp-1 mt-5'>as{editore}</p>
                </BookCover>
            </div>
            
            <div className="border px-20">

            <form>

                <div class="mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titolo del libro</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-6">
                    <label for="editore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Editore del libro</label>
                    <input type="text" id="editore" value={editore} onChange={handleEditoreChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            </div>
        </section>
    
    </>
}

export default NewBook;