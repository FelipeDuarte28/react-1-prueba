import React from 'react'

const Footer = ({titulo}) => {
    return (
        <footer className="text-body-secondary my-5">
            <div className="container">
                <p className="float-end">
                    <a href="#">Back to top</a>
                </p>
                <p>Prueba de React: "{titulo}" por Felipe Duarte</p>
            </div>
        </footer>
    )
}

export default Footer