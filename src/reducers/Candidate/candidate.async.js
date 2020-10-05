import axios from 'axios'
import environment from "../../environment.json"
export const saveCandidateInfo = async (formData) => {

    let url = `http://${environment.api_url}/api/candidates/registration`;
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


export const getAllCountriesByApi = async () => {
    let countriesUrl = `http://${environment.api_url}/api/country`;
   const getAllCountries = await  axios.get(countriesUrl)

    return  getAllCountries
}

export const getAllGendersByApi = async () => {
    let genderUrl = `http://${environment.api_url}/api/genders`;
    const getAllGenders = await axios.get(genderUrl)
    return getAllGenders
}

