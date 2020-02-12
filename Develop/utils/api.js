const axios = require('axios')
const api = username =>{
  axios.get(`https://api.github.com/users/${username}`)
  .then(data =>{
    console.log(data.data.avatar_url)
  })
  .catch(error => console.log(error))
}

module.exports = api;

// const api = {
//   getUser(username) {

//   }
// };

// module.exports = api;