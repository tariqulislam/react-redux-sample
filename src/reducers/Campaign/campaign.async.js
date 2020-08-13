import axios from 'axios'

export const saveCampaignInfo = async (formData) => {
    let url = "/camoaign/save"
    const saveAllCandidateInfo = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }
    });

    return saveAllCandidateInfo
}