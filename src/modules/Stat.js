import chi from 'chi-squared'
import listIt from 'list-it'
//      T  NT
// CASE a  b
// CONT c  d

export const rootUrl = `${window.location.protocol}//${window.location.host}`

export const significanceP = 0.05

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

export const statSignificanceString = (chiP) => {
  return(chiP < significanceP ? `（p<${significanceP}で有意差あり）` : '（有意差なし）')
}

export const statString = ({a, b, c, d}) => {
  if (!isValid({a, b, c, d})) return 'no result'
  const arr = [
    ['χ2', chiSq({a, b, c, d})],
    ['p値', chiP(chiSq({a, b, c, d})),statSignificanceString(chiP(chiSq({a, b, c, d})))],
  ]
  let buf = listIt.buffer({'autoAlign': true})
  buf.d(arr)
  return (buf.toString())
}

export const tableString = ({a, b, c, d}) => {
  if (!isValid({a, b, c, d})) return 'no result'
  const arr = [
    ['', 'treat', 'non-treat'],
    ['case', a, b],
    ['control', c, d],
  ]
  let buf = listIt.buffer({'autoAlign': true})
  buf.d(arr)
  return (buf.toString())
}

export const resultText = ({a, b, c, d}) => {
  return (
    '* 入力データ' +
    '\n' +
    tableString({a, b, c, d}) +
    '\n\n' +
    '* 検定結果' +
    '\n' +
    statString({a, b, c, d}) +
    '\n\n' +
    '* 解析日時' +
    '\n' +
    new Date() +
    '\n\n' +
    '* Powered by' +
    '\n' +
    rootUrl
  )
}

export const Stat = {
  chiSq,
  chiP,
  isValid,
  statString,
  resultText,
  tableString,
  statSignificanceString,
  significanceP,
}
export default Stat