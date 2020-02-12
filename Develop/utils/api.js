const axios = require('axios')
// const api = username =>{
//   axios.get(`https://api.github.com/users/${username}`)
//   .then(data =>{
//     console.log(data.data.avatar_url)
//   })
//   .catch(error => console.log(error))
// }

// module.exports = api;

const api = {
  getUser: async function(username) {
  let response = await axios.get(`https://api.github.com/users/${username}`)
  console.log(response.data)
  return response.data
    // .then(({data}) =>{
    //   console.log(data.avatar_url)
    //   return data
    // })
    // .catch(error => console.log(error))
    // }
  }
}
module.exports = api;
