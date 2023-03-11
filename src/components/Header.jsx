import React from 'react'

const Header = ({titulo}) => {
    return (
        <header>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center bs-warning">
                        <strong>{titulo}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<i>Prueba React 1</i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header