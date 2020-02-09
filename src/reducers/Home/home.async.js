import axios from 'axios'

export const getAllPosts = async () => {
   const getAllPosts = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
         headers: {
            'Content-Type': 'application/json'
         }
    }
   )
   return getAllPosts;
}

export const getAllWeatherInfo = () => {
   return new Promise((resolve, reject) => {
      axios.get(
         "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22")
         .then(res => {
            if (res.status === 200) {
               resolve(res)
            } else {
               reject(res)
            }
         });
   })
  
  
}