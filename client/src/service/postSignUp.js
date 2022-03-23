import axios from "axios";
import url from "../constants/url";


export async function postSignUp(props) {

    const completeURL = url + `/api/signUp/userID/${props.userID}?userName=${props.userName}&aptID=${props.apartmentID}`
    // const url = `http://localhost:5000/api/signUp/userID/${props.userID}?userName=${props.userName}&aptID=${props.apartmentID}`

    return await axios.post(completeURL, {
    }).then(response => {
        return response.data

    }).catch(error => {

        if (error.response.data.error) {
            return error.response.data.error
        }

    })

}