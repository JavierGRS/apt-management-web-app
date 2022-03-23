import axios from "axios";
import url from '../constants/url'

export async function getApartments() {

    const userToken = localStorage.getItem('user-token')

    const completeURL = url + `/api/apartments`

    return await axios.get(completeURL, {
        headers: {
            Authorization: 'Bearer ' + userToken,
        },
    }).then(response => {
        return response.data

    }).catch(error => {
        if (error.response) {
            if (error.response.data.error) {
                return []
            }
        }

        return []
    })




}