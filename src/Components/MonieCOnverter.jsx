/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`


const MonieCOnverter = () => {

const[amount , setAmount] = useState("");
const[convertedAmount, setConvertedAmount] = useState("");
const[valueFrom , setvalueFrom] = useState("USD")
const[valueTo , setvalueTo] = useState("EUR");



useEffect(function(){
    if(!amount || amount<= 0) return;
  async function converter() {
    
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${Number(amount)}&from=${valueFrom}&to=${valueTo}`)

    const data = await res.json();

    // console.log(data.rates);

    setConvertedAmount(data.rates[valueTo]); 

    // const convertedValue = Object.values(data.rates)[0];
    // setConvertedAmount(convertedValue);


  }


  converter()
} , [amount, valueFrom, valueTo])

  return (
    <div  className="m-4">

      <input className="border " type= "" value={amount} onChange={(e)=>setAmount((e.target.value))} />
      <select className="border ml-4" value={valueFrom} onChange={(e)=>setvalueFrom(e.target.value)} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select className="border ml-4" value={valueTo} onChange={(e)=> setvalueTo(e.target.value)} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p className="mt-4" > {!amount ? "OUTPUT" : convertedAmount}</p>

    </div>
    
  );
};

export default MonieCOnverter;
