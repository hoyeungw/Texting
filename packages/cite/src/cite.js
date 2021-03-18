import { tenseQuote }      from '@texting/quote'
import { makeReplaceable } from '@texting/translator'

const REG_CR = /\r/g
const BACKSLASH_CR = '\\r'
const REG_LF = /\n/g
const BACKSLASH_LF = '\\n'

const dictionary = [
  [REG_CR, BACKSLASH_CR],
  [REG_LF, BACKSLASH_LF]
] |> makeReplaceable

export const cite = text => {
  text = tenseQuote(text)
  return text.replace(dictionary)
}