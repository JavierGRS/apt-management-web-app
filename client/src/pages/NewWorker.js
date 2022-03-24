import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import WorkersTypeSelect from '../components/WorkersTypeSelect'
import { useAuth } from '../contexts/AuthContext'
import { getWorkersType } from '../service/getWorkersType'



export default function NewWorker() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const userNameRef = useRef()
    const workerTypeRef = useRef()

    const { signup } = useAuth()

    const history = useHistory()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [workersType, setWorkersType] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                userName: userNameRef.current.value,
                workerType: workerTypeRef.current.value
            })
            history.push("/login")
        } catch (error) {
            setError("Failed to create an account")
        }
    }

    async function setup() {
        setWorkersType(await getWorkersType())
    }


    useEffect(() => {
        setup()
    }, [])



    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Nuevo Trabajador</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="userName">
                            <Form.Label>Nombre Usuario</Form.Label>
                            <Form.Control type="text" ref={userNameRef} placeholder="Javier Gallego" required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirma contraseña</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id="workerSelect">
                            <Form.Label>Type:</Form.Label>
                            <WorkersTypeSelect ref={workerTypeRef} workersType={workersType} ></WorkersTypeSelect>
                        </Form.Group>
                        <Container className="text-center">
                            <Button disabled={loading} type="submit">
                                Crear Trabajador
                            </Button>
                        </Container>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
