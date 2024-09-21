import './App.css';
import InvestmentInputs from './component/InvestmentInputs';
import CalculatedValuesRender from './component/CalculatedValuesRender.jsx';
import { calculateInvestmentResults } from './util/investment';

import { useState } from 'react';

const INPUT_DATA = [
  { id: 'initial_investment', inputName: 'INTITAL INVESTMENT', value: 10000 },
  { id: 'anual_investment', inputName: 'ANUAL INVESTMENT', value: 1200 },
  { id: 'expected_return', inputName: 'EXPECTED RETURN', value: 10 },
  { id: 'duration', inputName: 'DURATION', value: 6 },
];

function App() {
  const inputDataCopy = INPUT_DATA.map(inp => ({ ...inp })); //Deep copy of original values

  const [inputValue, setInputValue] = useState(inputDataCopy);

  let calculatedValues = calculateInvestmentResults({
    initialInvestment: inputValue[0].value,
    annualInvestment: inputValue[1].value,
    expectedReturn: inputValue[2].value,
    duration: inputValue[3].value,
  });

  const isInputValid = inputValue[3].value > 0;

  function handleOnValueChange(newValue, id) {
    setInputValue(preValue => {
      return preValue.map(inp => {
        return inp && inp.id === id ? { ...inp, value: newValue } : inp;
      });
    });
  }

  return (
    <>
      <div className="grid p-4 grid-rows-2 grid-cols-2 rounded-md w-full bg-gradient-to-b from-[rgb(48,126,108)] to-[rgb(43,153,109)]">
        {inputValue.map(({ id, inputName, value }) => (
          <InvestmentInputs
            key={id}
            ID={id}
            onChangingValue={handleOnValueChange}
            name={inputName}
            value={value}
          />
        ))}
      </div>
      <div className="w-full mt-20">
        {isInputValid ? (
          <CalculatedValuesRender
            data={calculatedValues}
            initialInvestment={inputValue[0].value}
          />
        ) : (
          <h1 className="text-red-700 text-4xl">Duration Invalid!</h1>
        )}
      </div>
    </>
  );
}

export default App;
