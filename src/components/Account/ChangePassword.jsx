import React, { useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { updatePasswordService } from '../../services/client.service'

export default function ChangePassword() {

    const [Errors, setErrors] = useState({})
    const [Current, setCurrent] = useState('')
    const [Verify, setVerify] = useState('')
    const [NewPass, setNewPass] = useState('')
    const [Loading, setLoading] = useState(false)

    const updatePassword = (current, _new) => {

        const data = { current_password: current, new_password: _new };

        updatePasswordService(data)
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                setErrors({})
                setNewPass('')
                setVerify('')
                setCurrent('')
                toast.success(msg)
            })
            .catch(e => console.error(e.message))

        setLoading(false)

    }

    const onChangeNew = (e) => {
        if (!e.target.value) {
            Errors.new = 'Este campo es obligatorio'
        } else {
            Errors.new = ''
        }

        setNewPass(e.target.value)
    }

    const onChangeCurrent = (e) => {
        if (!e.target.value) {
            Errors.current = 'Este campo es obligatorio'
        } else {
            Errors.current = ''
        }

        setCurrent(e.target.value)
    }

    const onChangeVerify = (e) => {

        if (NewPass !== e.target.value) {
            Errors.verify = 'Las contraseñas deben coincidir'
        } else {
            Errors.verify = ''
        }

        setVerify(e.target.value)

    }

    const submitHandler = () => {

        if (NewPass !== Verify) {
            return
        }

        if (!Current) {
            return
        }
        setLoading(true)

        updatePassword(Current, NewPass)

    }

    return (
        <Form className='mb-4'>
            <div className="h6 text-muted mb-3">
                Cambiar de Contraseña
            </div>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Nueva contraseña'
                        value={NewPass}
                        onChange={onChangeNew}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Repita la contraseña'
                        value={Verify}
                        onChange={onChangeVerify}
                        isInvalid={Errors.verify}
                    />
                    {Errors.verify && <Form.Text className='text-danger'>{Errors.verify}</Form.Text>}
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Escriba su contraseña actual'
                        value={Current}
                        onChange={onChangeCurrent}
                        isInvalid={Errors.current}
                    />
                    {Errors.current && <Form.Text className='text-danger'>{Errors.current}</Form.Text>}
                </Form.Group>
            </Row>
            <Form.Group className='mb-2'>
                <Form.Check type='checkbox' label='Cerrar sesiones diferentes a esta' />
                <Form.Text></Form.Text>
            </Form.Group>
            <Button variant='primary' size='sm' onClick={submitHandler}>
                {
                    Loading ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        :
                        <>Cambiar</>
                }

            </Button>
        </Form>
    )
}