import axios from 'axios';

const login = async (credential) => {
    let url = "http://localhost:4000/api/auth/signin";

    return await axios.post(url, credential, {
        headers: {
            'content-type': 'application/json'
        }
    })
}


export {
    login
}

