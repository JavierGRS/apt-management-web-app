import axios from "axios";
import url from "../constants/url";

export async function postTicket(props) {

    const userToken = localStorage.getItem('user-token')

    console.log(props.userID)

    const completeURL = url + `/api/tickets/userID/${props.userID}`

    // const url = `http://localhost:5000/api/tickets/userID/${props.userID}`

    return await axios.post(completeURL, props.postData, {
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
