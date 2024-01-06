import getFullResponseFromAPI from './1-promise.js'
console.log(getFullResponseFromAPI(true));
const response = getFullResponseFromAPI(true)
response.then(data => console.log("The data returned is:", data))
console.log(getFullResponseFromAPI(false))
