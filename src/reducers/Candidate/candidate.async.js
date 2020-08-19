import axios from 'axios'

export const saveCandidateInfo = async (formData) => {

    let url = "http://localhost:4000/api/candidates/registration";
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

