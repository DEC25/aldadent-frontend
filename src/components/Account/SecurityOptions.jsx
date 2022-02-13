import React from 'react'
import { Form } from 'react-bootstrap'

export default function SecurityOptions() {
    return (
        <div>
            <div className="h6 text-muted mb-3">
                Opciones de Seguridad
            </div>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Check type='checkbox' label='Requerir la contraseña cuando se quiera realizar un cambio.' />
                    <Form.Text className='text-muted'>Para cambiar la contraseña, siempre se pedira una verificacion.</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check type='checkbox' label='Avisarme cuando se inicie sesión desde otro dispositivo.' />
                    <Form.Text>Se te avisara por correo o como una notificacion de sesion activa</Form.Text>
                </Form.Group>
                <Form.Check
                    type='checkbox'
                    label='Avisarme cuando se inicie sesión desde otro dispositivo.'
                    className='mb-2'
                />
            </Form>
        </div>
    )
}