// This function expects a JS object as an argument
// The object should contain the following prope    rties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let initialInvestmentValue = Number(initialInvestment);
  let annualInvestmentValue = Number(annualInvestment);
  let expectedReturnValue = Number(expectedReturn);
  let durationValue = Number(duration);

  for (let i = 0; i < durationValue; i++) {
    const interestEarnedInYear =
      initialInvestmentValue * (expectedReturnValue / 100);
    initialInvestmentValue += interestEarnedInYear + annualInvestmentValue;
    annualData.push({
      year: Math.floor(i + 1), // year identifier
      interest: Math.floor(interestEarnedInYear), // the amount of interest earned in this year
      valueEndOfYear: Math.floor(initialInvestmentValue), // investment value at end of year
      annualInvestmentValue: Math.floor(annualInvestmentValue), // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
