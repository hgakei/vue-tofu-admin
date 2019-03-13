/** 简单克隆
 * @param {Object,Array} obj  需要克隆的数据
 * @return {Object,Array}
*/

export const $clone = (obj) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    let object = {}
    for (let key in obj) {
      object[key] = $clone(obj[key])
    }
    return object
  } else if (Object.prototype.toString.call(obj) === '[object Array]') {
    let arr = []
    obj.forEach((v) => {
      arr.push($clone(v))
    })
    return arr
  } else {
    return obj
  }
}
