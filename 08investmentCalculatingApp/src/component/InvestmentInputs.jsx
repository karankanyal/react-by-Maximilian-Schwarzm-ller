export default function InvestmentInputs({ ID, name, value, onChangingValue }) {
  function newUpdatedValue(e, id) {
    const newValue = e.target.value;
    onChangingValue(newValue, id);
  }

  return (
    <div className="flex flex-col justify-center items-start my-3 font-bold">
      <label className="text-[9px] my-1" htmlFor={ID}>
        {name}
      </label>
      <input
        className="border border-teal-500 w-[90%] focus:outline-none rounded-md font-extralight text-sm bg-transparent p-2"
        id={ID}
        type="number"
        defaultValue={value}
        onChange={e => newUpdatedValue(e, ID)}
      />
    </div>
  );
}
