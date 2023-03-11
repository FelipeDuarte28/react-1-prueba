import React from 'react'

const Descripcion = ({ titulo, mainText }) => {
    return (

        <div className="container-fluid py-5 text-center rounded">
            <h1 className="text-bg-warning p-3 display-5 fw-bold rounded">{titulo}</h1>
            <p className="fs-5">{mainText}</p>
        </div>

    )
}
export default Descripcion