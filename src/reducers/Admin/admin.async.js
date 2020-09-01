import axios from 'axios';
import environment from "../../environment.json"
const login = async (credential) => {
    let url = `http://${environment.api_url}/api/auth/signin`;

    return await axios.post(url, credential, {
        headers: {
            'content-type': 'application/json'
        }
    })
}


export {
    login
}

