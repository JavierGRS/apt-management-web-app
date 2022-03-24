import React, { Fragment, useState } from 'react'
import { Accordion, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Tickets(props) {
    const [showTickets, setShowTickets] = useState(false)

    return (
        <>
            <Accordion defaultExpanded="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <strong className="pl-2 pr-3">TIQUES {props.state}</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        {
                            props.tickets.length === 0 ? <div> No hay tiques disponibles</div> :
                                props.tickets.map((t) => {
                                    return (
                                        <div>
                                            <span>Tipo: {t.type} </span>
                                            <br />
                                            <span>Apartamento : {t.aptName} {t.aptNumber} </span>
                                            <br />
                                            <span>Descripción : {t.description}</span>
                                            <br />
                                            <Link to={{
                                                pathname: `/ticket-details`,
                                                state: {
                                                    ticket: t,
                                                    userID: props.userID,
                                                    role: props.role
                                                }
                                            }}>Ver detalles</Link>
                                        </div>

                                    )
                                })
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Tickets
