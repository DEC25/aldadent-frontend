import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../../image/banner.jpg'
import abajobanner from '../../image/abajodebanner.jpg'

export default function Main() {

    const goTo = useNavigate()

    return (
        <div>
            <div className="col-12 container mt-5">
                <img src={banner} alt="imagen" className="border border-secondary " style={{ "width": "100%" }} />
            </div>
            <div className="col-12  container text-center mt-5">
                <img src={abajobanner} alt="imagen" className="border border-secondary " style={{ "width": "100%" }} />
            </div>
            <div className="col-12 text-center mt-5">
                <button
                    type="button"
                    className="btn btn-outline-info btn-lg"
                    onClick={() => goTo('/productos')}
                >
                    Ver lista de productos
                </button>
            </div>

        </div>
    )
}
