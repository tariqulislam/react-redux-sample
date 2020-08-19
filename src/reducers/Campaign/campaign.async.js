import axios from 'axios'

export const loadCampaingByLang = async (lang) => {
    let url = `http://localhost:4000/api/campaigns?lang=${lang}`
    const campaignByLang = axios.get(url)
    return campaignByLang
}