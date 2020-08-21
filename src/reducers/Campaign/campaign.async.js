import axios from 'axios'

export const loadCampaingByLang = async (lang) => {
    let url = `http://ec2-18-224-16-47.us-east-2.compute.amazonaws.com:4000/api/campaigns?lang=${lang}`
    const campaignByLang = axios.get(url)
    return campaignByLang
}