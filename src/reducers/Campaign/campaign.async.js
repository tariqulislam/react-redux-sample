import axios from 'axios'
import environment from "../../environment.json"

export const loadCampaingByLang = async (lang) => {
    let url = `http://${environment.api_url}/api/campaigns?lang=${lang}`
    const campaignByLang = axios.get(url)
    return campaignByLang
}