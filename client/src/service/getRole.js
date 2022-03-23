import axios from "axios";
import url from '../constants/url'

export async function getRole(props) {

    const userToken = localStorage.getItem('user-token')

    const completeURL = url + `/api/rol/userID/` + `${props.userID}`

    return await axios.get(completeURL, {
        headers: {
            Authorization: 'Bearer ' + userToken,
        },
    }).then(response => {
        return response.data

    }).catch(error => {
        if (error.response) {
            if (error.response.status === (401)) {
                return "Unauthorized"
            }
        }
        return "Unauthorized"
    })

}