import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = ()  =>  {
  return (
    <div className ="currency-converter">
      <h2>Currency Converter</h2>
      <table>
          <body>
                    <tr>
                      <td>Primari Currency:</td>
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

      <ExchangeRate/>
    </div>
  )
}

export default CurrencyConverter
