import axios from 'axios'

export const saveCandidateInfo = async (formData) => {
    let url = ""
    const saveAllCandidateInfo = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });

    return saveAllCandidateInfo
}