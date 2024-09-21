import { formatter } from '../util/investment';

export default function CalculatedValuesRender({ data, initialInvestment }) {
  return (
    <table className=" w-full">
      <thead>
        <tr className="table_heading ">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="mt-4">
        {data.map(eachEntry => {
          const totalInterest =
            Number(eachEntry.valueEndOfYear) -
            Number(eachEntry.annualInvestmentValue) * Number(eachEntry.year) -
            Number(initialInvestment);
          const totalAmountInvested =
            Number(eachEntry.valueEndOfYear) - totalInterest;
          return (
            // <tr>
            //   <td className="text-teal-100 text-[12px] font-extralight *:">
            //     {eachEntry.year}
            //   </td>
            //   <td className="text-teal-100 text-[12px] font-extralight *:">
            //     {eachEntry.valueEndOfYear}
            //   </td>
            //   <td className="text-teal-100 text-[12px] font-extralight *:">
            //     {eachEntry.interest}
            //   </td>
            //   <td className="text-teal-100 text-[12px] font-extralight *:">
            //     {totalInterest}
            //   </td>
            //   <td className="text-teal-100 text-[12px] font-extralight *:">
            //     {totalAmountInvested}
            //   </td>
            // </tr>
            <tr key={eachEntry.year}>
              <td className="text-teal-100 text-[12px] font-extralight my-2 *:">
                {eachEntry.year}
              </td>
              <td className="text-teal-100 text-[12px] font-extralight my-2 *:">
                {formatter.format(eachEntry.valueEndOfYear)}
              </td>
              <td className="text-teal-100 text-[12px] font-extralight my-2 *:">
                {formatter.format(eachEntry.interest)}
              </td>
              <td className="text-teal-100 text-[12px] font-extralight my-2 *:">
                {formatter.format(totalInterest)}
              </td>
              <td className="text-teal-100 text-[12px] font-extralight my-2 *:">
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
