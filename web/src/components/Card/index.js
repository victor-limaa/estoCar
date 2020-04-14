import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Card (props){

    return(
        <div className='d-flex flex-column justify-content-center align-items-center cardSize'>
            <div >
                <div className='d-flex flex-column align-items-center mb-2'>
                <h2>{props.placa}</h2>
                <img src={props.imgCar} className='imgcar' />
                </div>
                <div>
                    <h6 className='mb-0'>Marca:</h6>
                    {props.marca}
                    <h6 className='mb-0 mt-2'>Modelo:</h6>
                    {props.modelo}
                </div>
            </div>
            <Link to={`${props._id}`}>
            <button className='btn cardBtn align-self-center mt-3'
                >
                veja mais
            </button>
            </Link>
        </div>

    )

}

export default Card