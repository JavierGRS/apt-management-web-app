import React from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import { useState, useEffect, useRef, createRef } from 'react'
import { postTicket } from '../service/postTicket'
import { getApartments } from '../service/getApartments'
import StateSelect from '../components/StateSelect'
import TypeSelect from '../components/TypeSelect'
import WorkersSelect from '../components/WorkersSelect'
import TimeChoose from '../components/TimeChoose'
import ApartmentsSelect from '../components/ApartmentsSelect'
import { useAuth } from '../contexts/AuthContext'
import { getRole } from '../service/getRole'
import { Form, Button, Card, Alert, Modal } from "react-bootstrap"
import { getTenantApartment } from '../service/getTenantApartment'



function NewTicket() {

    // const timeRef = useRef(null)
    const aptRef = createRef("")
    const workerRef = useRef(null)
    const typeRef = useRef("")
    const stateRef = useRef("")
    const descriptionRef = useRef("")
    const [workers, setWorkers] = useState([])
    const history = useHistory()
    const { currentUser } = useAuth()
    const [typeOfState, setTypeOfState] = useState([])
    const [apts, setApts] = useState([])

    const userID = currentUser.uid

    const typeOfTickets = [
        { id: 1, type: "cleaning" },
        { id: 2, type: "runner" },
        { id: 3, type: "maintenance" }
    ]



    async function setup() {
        //Comprobar si el rol es tenant coger el apartamento que tiene asignado y no un select
        const role = await getRole({
            userID: userID
        })

        if (role === "tenant") {
            setApts([await getTenantApartment({
                userID: userID
            })])
            setTypeOfState([
                { id: 1, state: "requested" }
            ])
        } else {
            setApts(await getApartments())
            setTypeOfState([
                { id: 1, state: "requested" },
                { id: 2, state: "accepted" },
                { id: 3, state: "done" }
            ])
        }



    }

    async function handleSubmit(e) {

        e.preventDefault()

        const userID = auth.currentUser.uid
        const todaysDate = await getTodayDate()

        let postData = {
            apartmentID: aptRef.current.value,
            state: stateRef.current.value,
            type: typeRef.current.value,
            description: descriptionRef.current.value,
            createdBy: userID,
            createdTime: todaysDate
        }


        if (stateRef.current.value !== "requested") {
            postData.worker = workerRef.current.value
        }

        console.log(postData)

        await postTicket({
            postData: postData,
            userID: userID
        })

        history.push("/")
    }


    async function getTodayDate() {
        //Slice for getting correct format 
        var today = new Date().toISOString().slice(0, -8);
        return today
    }


    useEffect(() => {
        setup()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>


            <Card>
                <Card.Body>
                    <div className="mb-3 d-flex align-items-center">
                        <button type="button" variant="link" onClick={() => history.goBack()} className="mr-auto btn btn-secondary">
                            <i className="bi bi-arrow-return-left"></i>
                        </button>
                        <h1 className="mr-auto">Crear Tique</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="apartmentSelect">
                            <Form.Label>Apartamento:</Form.Label>
                            <ApartmentsSelect ref={aptRef} apts={apts}></ApartmentsSelect>
                        </Form.Group>
                        <Form.Group id="stateSelect">
                            <Form.Label>Estado:</Form.Label>
                            <StateSelect typeRef={typeRef.current.value} typeOfState={typeOfState} ref={stateRef} workersChange={workers => setWorkers(workers)}></StateSelect>
                        </Form.Group>
                        <Form.Group id="typeSelect">
                            <Form.Label>Tipo:</Form.Label>
                            <TypeSelect workersChange={workers => setWorkers(workers)} ref={typeRef} typeOfTickets={typeOfTickets}></TypeSelect>
                        </Form.Group>
                        <Form.Group id="workerSelect">
                            {((stateRef.current.value === "accepted") || (stateRef.current.value === "done")) &&
                                <>
                                    <Form.Label>Worker:</Form.Label>
                                    <WorkersSelect ref={workerRef} workers={workers} typeOfState={typeOfState} ></WorkersSelect>
                                </>
                            }
                        </Form.Group>
                        <Form.Group id="description">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows={3} ref={descriptionRef} required ></Form.Control>
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Guardar Tique
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </>
    )
}

export default NewTicket
