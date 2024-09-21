import './App.css';
import InvestmentInputs from './component/InvestmentInputs';
import CalculatedValues from './component/CalculatedValues';

function App() {
  let initialValue = 10;
  function handleOnValueChange(inputValue) {
    console.log(inputValue);
  }

  return (
    <>
      <div className="grid p-4 grid-rows-2 grid-cols-2 rounded-md w-full bg-gradient-to-b from-[rgb(48,126,108)] to-[rgb(43,153,109)]">
        {/* {INPUTS.map((input, index) => (
          <InvestmentInputs
            key={index}
            ID={input}
            onChangingValue={handleOnValueChange}
            value={initialValue}
          />
        ))} */}
        <InvestmentInputs
          ID="initial_investment"
          onChangingValue={handleOnValueChange}
          value="10000"
        />
        <InvestmentInputs
          ID="anual_investment"
          onChangingValue={handleOnValueChange}
          value="1200"
        />
        <InvestmentInputs
          ID="expected_return"
          onChangingValue={handleOnValueChange}
          value="10"
        />
        <InvestmentInputs
          ID="duration"
          onChangingValue={handleOnValueChange}
          value="6"
        />
      </div>
      <div className="w-full mt-20">
        <table className=" w-full">
          <thead>
            <tr className="table_heading">
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest(Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
        </table>
        <CalculatedValues />
      </div>
    </>
  );
}

export default App;
