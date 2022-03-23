import axios from "axios";
import url from "../constants/url";

export async function getTenantApartment(props) {

    const userToken = localStorage.getItem('user-token')

    const completeURL = url + `/api/apartments/tenantID/${props.userID}`

    return await axios.get(completeURL, {
        headers: {
            Authorization: 'Bearer ' + userToken,
        },
    }).then(response => {
        return response.data
    }).catch(error => {
        return []
    })




}
