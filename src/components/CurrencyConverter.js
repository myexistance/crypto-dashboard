import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = ()  =>  {
  return (
    <div className ="currency-converter">
      <h2>Currency Converter</h2>
      <div>
                <table>
                   <body>
                             <tr>
                               <td>Primary Currency:</td>
                               <td>
                                 <input
                                 type="number"
                                 name="currency-amount-1"
                                 value={""}
                                 />
                               </td>
                             </tr>
                   </body>
               </table>

      </div>
      
      <ExchangeRate/>
    </div>
  )
}

export default CurrencyConverter
