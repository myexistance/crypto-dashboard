import { useState } from 'react'
import ExchangeRate from "./ExchangeRate"
import axios from 'axios'

const CurrencyConverter = ()  =>  {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'DOGE', 'ADA' ]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  

  console.log(chosenSecondaryCurrency)

  const convert = () => {
     

      const options = {      
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE',       to_currency: chosenSecondaryCurrency},
        headers: {
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
          'x-rapidapi-key': '084895d68amshd43646cc4e216f4p1626a4jsn6bf06a1a7aae'
        }
      };

      axios.request(options).then((response) => {
	console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
          setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
          setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
      }).catch((error) => {
	console.error(error);
      });
  }
   
  return (
    <div className ="currency-converter">
      <h2>Currency Converter</h2>
      <div className = "input-box">
                <table>
                   <tbody>
                             <tr>
                               <td>Primary Currency:</td>
                               <td>
                                 <input
                                 type="number"
                                 name="currency-amount-1"
                                 value={amount}
                                 onChange={(e) => setAmount(e.target.value)}
                                 />
                               </td>
                               <td>
                                   <select
                                     value={chosenPrimaryCurrency}
                                     name="currency-option-1"
                                     className="currency-options"
                                     onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                                   >
                                        {currencies.map(currency => (<option>{currency}</option>))}
                                   </select>
                               </td>       
                             </tr>
                             <tr>
                               <td>Secondary Currency:</td>
                               <td>
                                 <input
                                 name="currency-amount-2"
                                 value={result}
                                 disabled={true}
                                 />
                               </td>
                               <td>
                                   <select
                                     value={chosenSecondaryCurrency}
                                     name="currency-option-2"
                                     className="currency-options"
                                     onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                   >
                                        {currencies.map(currency => (<option>{currency}</option>))}
                                   </select>
                               </td>       
                             </tr>
                   </tbody>
               </table>

               <button id="convert-button" onClick={convert}>Convert</button>

      </div>
      
      <ExchangeRate 
      exchangeRate={exchangeRate}
      chosenPrimaryCurrency={chosenPrimaryCurrency}
      chosenSecondaryCurrency={chosenSecondaryCurrency}/>

    </div>
  )
}

export default CurrencyConverter
