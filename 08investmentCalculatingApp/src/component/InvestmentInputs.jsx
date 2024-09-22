export default function InvestmentInputs({ inputValue, onChangingValue }) {
  function newUpdatedValue(e, id) {
    const newValue = e.target.value;
    onChangingValue(newValue, id);
  }

  {
    return inputValue.map(({ id, inputName, value }) => {
      return (
        <div
          key={id}
          className="flex flex-col justify-center items-start my-3 font-bold"
        >
          <label className="text-[9px] my-1" htmlFor={id}>
            {inputName}
          </label>
          <input
            className="border border-teal-500 w-[90%] focus:outline-none rounded-md font-extralight text-sm bg-transparent p-2"
            id={id}
            type="number"
            defaultValue={value}
            onChange={e => newUpdatedValue(e, id)}
          />
        </div>
      );
    });
  }
}
