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