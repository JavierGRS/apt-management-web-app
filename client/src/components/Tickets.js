import React, { Fragment, useState } from 'react'
import { Container, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Tickets(props) {
    const [showTickets, setShowTickets] = useState(false)

    return (
        <div className="p-2">
            <button
                onClick={() => showTickets ? setShowTickets(false) : setShowTickets(true)}
            >
                <strong className="pl-2 pr-3">TIQUES {props.state}</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
            </button>

            {

                props.tickets.length === 0 && showTickets ? (
                    <div> No hay tiques disponibles </div>
                ) : (
                    showTickets && props.tickets.map((t) => {
                        return (
                            <Dropdown.Item key={t.ticketID} >
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
                            </Dropdown.Item>
                        )
                    })
                )}

            {/* {
                props.tickets.length === 0 ? (
                    <div> No hay tiques disponibles </div>
                ) : (
                    props.tickets.map((t) => {
                        return (
                            <Dropdown.Item key={t.ticketID} >
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
                            </Dropdown.Item>

                        )
                    })
                )
            }
            <br></br> */}
        </div >
    )
}

export default Tickets
