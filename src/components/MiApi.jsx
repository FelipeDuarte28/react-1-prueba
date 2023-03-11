import React from 'react';
import { useState, useEffect } from "react";

const MiApi = ({palabra}) => {

    const [info, setInfo] = useState('');

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        let url = "https://swapi.dev/api/starships/?format=json";
        let dataTotal = []
        while (url != null) {
            try {
                let res = await fetch(url);
                let data = await res.json();
                dataTotal = [].concat(dataTotal, data.results);
                url = data.next;
            } catch (err) {
                alert(err.message);
            }
        }

        dataTotal.sort(function (a, b) {
            let x = a.starship_class.toLowerCase();
            let y = b.starship_class.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });

        setInfo(dataTotal);
    }



    let resultadoFiltrado = [];
    if (!palabra) {
        resultadoFiltrado = info;
    } else {
        resultadoFiltrado = info.filter(
            (starship) =>
                starship.name.toLowerCase().includes(palabra.toLowerCase()) ||
                starship.model.toLowerCase().includes(palabra.toLowerCase())
        );

    }

    return (
        <table className="table table-striped table-hover shadow-lg">
            <thead className="bg-warning">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>Tipo de nave</th>
                    <th>Tripulación</th>
                </tr>
            </thead>
            <tbody>
                {resultadoFiltrado.length > 0 ?
                    resultadoFiltrado.map((starship, key) =>
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{starship.name}</td>
                            <td>{starship.model}</td>
                            <td>{starship.manufacturer}</td>
                            <td>{starship.starship_class.toUpperCase()}</td>
                            <td>{starship.crew}</td>
                        </tr>
                    ) : 
                    <tr>
                        <td>Cargando...</td>
                        <td>Cargando...</td>
                        <td>Cargando...</td>
                        <td>Cargando...</td>
                        <td>Cargando...</td>
                        <td>Cargando...</td>
                    </tr>
                }
            </tbody>
        </table>
    );
}



export default MiApi