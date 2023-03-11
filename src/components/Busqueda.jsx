import React from 'react'

const Busqueda = ({palabra, setPalabra }) => {
    return (
        <div className="p-3 m-3 bg-warning-subtle rounded">
            <h2>Filtro de naves:</h2>
            <input
                className="form-control"
                type="text"
                placeholder="Filtrar por nombre o modelo..."
                value={palabra}
                onChange={(e) => setPalabra(e.target.value)}
            />
        </div>
    )
}

export default Busqueda