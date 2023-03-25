import { useEffect } from 'react';

function Logout(){

    //Cancelazione eventuali sessioni attive

    useEffect(() => {
        function redirect() {
            window.location.assign(`/`);
        }
        redirect();
    }, );

    return null;

}

export default Logout;