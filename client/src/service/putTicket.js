import axios from "axios";
import url from "../constants/url";

export async function putTicket(props) {

    const userToken = localStorage.getItem('user-token')
    console.log(props.ticketID)
    console.log(props.postData)

    const completeURL = url + `/api/tickets/ticketId/${props.ticketID}`

    return await axios.put(completeURL, props.postData, {
        headers: {
            Authorization: 'Bearer ' + userToken,
        },
    }).then(response => {
        return response.data
    }).catch(error => {
        if (error.response.data.error) {
            return []
        }
    })

}
