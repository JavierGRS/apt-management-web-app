import axios from "axios";
import url from "../constants/url";

export async function removeTicket(props) {

    const userToken = localStorage.getItem('user-token')

    console.log(props.ticketID)
    console.log(props.userID)

    const completeURL = url + `/api/tickets/${props.ticketID}/userID/${props.userID}`

    console.log(completeURL)

    return await axios.delete(completeURL, {
        headers: {
            Authorization: 'Bearer ' + userToken,
        },
    }).then(response => {

        return response.data

    }).catch(error => {
        return error


    })

}