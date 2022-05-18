const load = require("lodash")

const newarr = [1,2,3,4,5]

const newitems = load.flattenDeep(newarr)
console.log(newitems)