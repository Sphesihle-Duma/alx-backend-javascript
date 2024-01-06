import signUpUser from './4-user-promise'

console.log(signUpUser("Bob", "Dylan"))

signUpUser("Bob", "Dylan")
.then(data => console.log(data))
