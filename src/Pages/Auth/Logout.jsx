import { useEffect } from 'react';
import Cookies from 'js-cookie';

function Logout(){

    //Cancelazione eventuali sessioni attive
    function deleteSession(){
        Cookies.remove('userEmail'); 
        Cookies.remove('userName');
        Cookies.remove('userSurname');
    }

    useEffect(() => {
        deleteSession();
        window.location.assign(`/`);
    }, );

    return null;

}

export default Logout;