import React from 'react'
import DataClient from './DataClient'
import Addresses from './Addresses'

export default function AccountInfo() {
    return (
        <div className='container'>
            <div className="h2 mt-3 mb-4">
                Información sobre tu cuenta
            </div>
            <DataClient />
            <Addresses />
        </div>
    )
}
