import { useEffect, useState } from "react";

// ------- creating custom hook ----------

function useCurrencyInfo(currency){ // creating custom hook
    const [data, setData] = useState({})
    useEffect( ()=>{
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) // after change currency in url we get the conversion of that particular curreny into all other currency
       .then((res) => res.json()) // use to convert string form into object because data return from fetch is in the form for string
       .then((res) => setData(res[currency]))  // res[currency] is equal to res.currency gives all value of usd into differnent currency type in form of object
       console.log(data);
    },[currency])
  
console.log(data) 
return data

} 

export default useCurrencyInfo