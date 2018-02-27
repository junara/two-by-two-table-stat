import chi from 'chi-squared'

//      T  NT
// CASE a  b
// CONT c  d

const isValid = ({a, b, c, d}) => {
  return a > 0 && b > 0 && c > 0 && d > 0
}

export const chiSq = ({a, b, c, d}) => {
  if (!isValid({a, b, c, d})) return 'error'
  const n = a + b + c + d
  const calc = ((a * d - b * c) ** 2) * (n / ((a + b) * (c + d) * (a + c) * (b + d)))
  return (calc.toFixed(3))
}

export const chiP = (chiSq) => {
  if (!(chiSq > 0)) return 'error'
  const df = 1
  const calc = 1 - chi.cdf(chiSq, df)
  return calc.toFixed(3)
}

export const Stat = {
  chiSq,
  chiP,
  isValid,
}
export default Stat