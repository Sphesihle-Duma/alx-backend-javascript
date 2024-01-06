import getResponseFromAPI from "./0-promise.js"
const response = getResponseFromAPI()
console.log(typeof response)
response.then(msg => console.log('return data:', msg))
console.log(response instanceof Promise);
