function Card(props){
    return <>
        <a href="#">
        <div className="max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={props.img} alt={props.nome} />
            <div className="p-5 pt-2">
                <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.nome}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{props.filtro}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{props.costi}</p>
            </div>
        </div>
        </a>

    </>
}

export default Card;