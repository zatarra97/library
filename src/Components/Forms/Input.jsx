import React from "react";

function Input(props){
    return <>
        <div>
            <label htmlFor={props.id} className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <input type={props.type} name={props.id} id={props.id} placeholder={props.placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
        </div>
    </>
}

export default Input;