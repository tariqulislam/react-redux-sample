import axios from 'axios'

export const saveCandidateInfo = async (formData) => {
    let url = "http://localhost:3000"
    const saveAllCandidateInfo = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });

    return saveAllCandidateInfo
}

export const saveCandidateHalfBodyPhoto = async (imageData) => {
    let url = "";
    const uploadHalfBodyPhoto = await axios.post(url, imageData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });
}


export const saveCandidatePhotoPassport = async (imageData) => {
    let url = "";
    const uploadPassportPhoto = await axios.post(url, imageData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });
}

