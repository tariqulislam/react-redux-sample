import axios from 'axios';

const login = async (credential) => {
    let url = "http://ec2-3-14-85-86.us-east-2.compute.amazonaws.com:4000/api/auth/signin"

    return await axios.post(url, credential, {
        headers: {
            'content-type': 'application/json'
        }
    })
}


export {
    login
}

