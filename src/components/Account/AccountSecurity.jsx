import React from 'react'
import ChangePassword from './ChangePassword'
import SecurityOptions from './SecurityOptions'

export default function AccountSecurity() {
  return (
    <div className='container' >
        <div className="h2 mt-3 mb-4">
            Seguridad de la cuenta
        </div>
        <ChangePassword />
        <SecurityOptions />
    </div>
  )
}