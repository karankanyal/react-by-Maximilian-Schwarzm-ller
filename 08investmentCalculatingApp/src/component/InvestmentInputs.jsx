import { useState } from 'react';

export default function InvestmentInputs({ ID, onChangingValue, value }) {
  const [inputValue, setInputValue] = useState(value);

  function newUpdatedValue(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChangingValue(inputValue);
    console.log(inputValue);
  }

  return (
    <div className="flex flex-col justify-center items-start my-3 font-bold">
      <label className="text-[9px] my-1" htmlFor={ID}>
        {ID.toUpperCase().replace(/_/g, ' ')}
      </label>
      <input
        className="border w-[90%] focus:outline-none rounded-md font-extralight text-sm bg-transparent p-2"
        id={ID}
        type="number"
        defaultValue={inputValue}
        onChange={e => newUpdatedValue(e)}
      />
    </div>
  );
}
