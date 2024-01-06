import uploadPhoto from './5-photo-reject'
uploadPhoto('guillaume.jpg')
.then(()=> console.log('Successfully got data'))
.catch(err => console.log(err))
