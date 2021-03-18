export const splitter = function (text) {
  const regex = this
  let ms, l = 0, r = 0, sp, ph
  const vec = []
  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index
    if ((sp = text.slice(l, r))) vec.push(sp)
    vec.push(ph)
    l = regex.lastIndex
  }
  if (l < text.length) vec.push(text.slice(l))
  return vec
}

/**
 *
 * @param {RegExp} regex
 * @return {Function|function(string):string[]}
 */
export const Splitter = (regex) => splitter.bind(regex)
