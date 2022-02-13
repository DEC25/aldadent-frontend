import React from 'react'
import fblogo from '../../image/Face.png'
import publi from '../../image/Alda.jpg'

export default function Footer() {
    return (
        <footer style={{ marginTop: '50px' }} >
            <div className="bg-secondary" >
                <div className="container">
                    <div className="row">
                        <div className="col-4 p-3">
                            <br />
                            <br />
                            <h6>Acerca de Alda Dent</h6>
                            <p>Brindamos los siguientes servicios:  <br />
                                1. Diseño de sonrisa <br />
                                2. Blanqueamientos <br />
                                3. Odontopediatría <br />
                                4. Curaciones   <br />
                                5. Ortodoncia   <br />
                                6. Implantes dentales  <br />
                                7. Emergencia dental <br />
                                Especialista en odontología  <br />
                                Dr. José Yovera Saravia </p></div>
                        <div className="col-4 p-3">
                            <br />
                            <br />
                            <h6 >Comunicate con nosotros :</h6> <br />
                            Telefono : 956 584 646 <br />
                            Vaya directamente a Av. Oscar R. Benavides # 303 - 2do Piso 11702 Chincha Alta, Perú.
                            <br /> <br />
                            <div className="text-center">
                                <img src={fblogo} className="border border-dark rounded-circle " alt="imagen" style={{ "width": "20%" }} /> <br /><p>Alda dent</p></div>

                        </div>
                        <div className="col-4 p-3 text-center">
                            <br />
                            <img src={publi} alt='' style={{ width: '100%' }} className="border border-dark" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}