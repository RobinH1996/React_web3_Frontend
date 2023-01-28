import React, { useState, useLayoutEffect } from "react";
import currencies from "./commonCurrency.json";

function App(props) {
    const [currencyFrom, setCurrencyFrom] = useState("USD");
    console.log(props.bank)
    useLayoutEffect(() => {
        var select = document.querySelector('select');
        var hr = Object.assign(
            document.createElement('hr'),
            {
              className: 'dashed',
            }
          )
        if(props.bank!=="SEPA"){
            select.insertBefore(hr, select[select.length - 115]);
        }
    }, [props.bank]);

    const handleSelectFrom = (event) => {
        const { value } = event.target;
        setCurrencyFrom(value);
    };

    return (
        <div>
            <select className="currencySelectObj" onChange={handleSelectFrom} value={currencyFrom}>
                {props.bank==="SEPA"?
                Object.keys(currencies).filter((currency)=>currency==="EUR").map((currency, index) => (
                    <option value={currency} key={index}>
                        {currency} - {currencies[currency].name}
                    </option>
                ))
                :
                Object.keys(currencies).map((currency, index) => (
                    <option value={currency} key={index}>
                        {currency} - {currencies[currency].name}
                    </option>
                ))
                }
            </select>
        </div>
    );
}

export default App;
