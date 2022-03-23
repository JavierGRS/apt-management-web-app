import axios from "axios";
import url from "../constants/url";


export async function getTicket(props) {

    const userToken = localStorage.getItem('user-token')
    let completeURL = ""

    console.log(props.role)

    if (props.role === "admin") {
        completeURL = url + `/api/tickets/adminID/${props.userID}?state=${props.state}`
    } else if (props.role === "tenant") {
        completeURL = url + `/api/tickets/tenantID/${props.userID}?state=${props.state}`
    } else if (props.role === "worker") {
        completeURL = url + `/api/tickets/workerID/${props.userID}?state=${props.state}`
    } else {
        return []
    }

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
    })

}
