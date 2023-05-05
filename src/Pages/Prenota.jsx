import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Prenota() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    // Imposta la data massima selezionabile a un mese a partire dalla data odierna
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    return (
        <div className="container mx-auto">
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <DatePicker
            selected={selectedDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()} // Disabilita le date precedenti alla data corrente
            maxDate={maxDate} // Imposta la data massima selezionabile
        />
        </div>
    );
}

export default Prenota;