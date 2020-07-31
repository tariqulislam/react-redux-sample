import axios from 'axios'

export const saveCandidateInfo = async (formData) => {
    // let url = "http://ec2-3-14-85-86.us-east-2.compute.amazonaws.com:4000/api/candidates/registration"
    let url = "http://localhost:40000/api/candidates/registration";
    const saveAllCandidateInfo = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return saveAllCandidateInfo;
}

export const saveCandidateHalfBodyPhoto = async (imageData) => {
    let url = "";
    const uploadHalfBodyPhoto = await axios.post(url, imageData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });

    return uploadHalfBodyPhoto;
}


export const saveCandidatePhotoPassport = async (imageData) => {
    let url = "";
    const uploadPassportPhoto = await axios.post(url, imageData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });

    return uploadPassportPhoto;
}

