import { convertTimestampCORTO } from "../utils/utils";
// Components
import TextareaAutosize from "react-textarea-autosize";

const ReparacionPresentational = ({
    admin,
    reparacion,
    estados,
    setEstado,
    changeInputRep,
    handleGuardarReparacion,
    handleEliminarReparacion,
}) => {

    console.log("REPARACION presentational");

    return(
        <div
            className="p-4"
            style={{
                backgroundColor: estados[reparacion.data.EstadoRep].color
            }}
        >
            <div 
                className="card mb-3"
                style={{
                    backgroundColor: "#CCCCCC"
                }}
            >
                <div className="card-body">
                    <h3 className="card-title">
                        REPARACIÓN
                    </h3>
                    <div>Estado: {reparacion?.data?.EstadoRep}</div>
                    <div>Drone: {reparacion?.data?.DroneRep}</div>
                    <div>Cliente: {reparacion?.data?.NombreUsu} {reparacion?.data?.ApellidoUsu}</div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">ESTADO DE LA REPARACIÓN</h5>
                    <div className="text-center">
                        {Object.values(estados).map(estado =>
                            <button 
                                key={estado.nombre}
                                className="m-2 btn btn-outline-secondary overflow-hidden"
                                type="button"
                                alt={estado.nombre}
                                style={{
                                    backgroundColor: 
                                        estado.nombre == reparacion?.data?.EstadoRep?
                                        estado.color :
                                        "#CCCCCC"
                                    ,
                                    width: "90px",
                                    height: "30px"
                                }}
                                onClick={ ()=>setEstado(estado) } // PARA REDUX, Y QUIZÁS PARA USESTATE
                            >
                                {estado.nombre}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            { admin ? // Sólo para administrador
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">ENLACE A DRIVE</h5>
                    <div>
                        <label className="form-label">En lace a Drive</label>

                        <div className="input-group">
                            <input 
                                onChange={e => changeInputRep(e.target)}
                                type="text"
                                className="form-control" 
                                id="DriveRep"
                                value={reparacion?.data?.DriveRep } 
                            />
                            <div className="input-group-append">
                                <a href={reparacion?.data?.DriveRep}><button className="btn btn-outline-secondary bg-bluemcdron text-white" type="button">Ir</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null }
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">CONSULTA - PRIMEROS DATOS</h5>
                    <div>
                        <label className="form-label">Fecha de Cosulta</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="FeConRep"
                            value={convertTimestampCORTO(reparacion?.data?.FeConRep)}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="form-label">Email Cliente</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="UsuarioRep" 
                            value={reparacion?.data?.EmailUsu || reparacion?.data?.UsuarioRep}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="form-label">Nombre Cliente</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="NombreUsu" 
                            value={reparacion?.data?.NombreUsu}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="form-label">Apellido Cliente</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="ApellidoUsu" 
                            value={reparacion?.data?.ApellidoUsu}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="form-label">Teléfono Cliente</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="TelefonoUsu" 
                            value={reparacion?.data?.TelefonoUsu}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="form-label">Modelo del Drone</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="text" 
                            className="form-control" 
                            id="DroneRep"
                            value={reparacion?.data?.DroneRep || ""}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Desperfectos o Roturas</label>
                        <TextareaAutosize
                            onChange={e => changeInputRep(e.target)} 
                            className="form-control" 
                            id="DescripcionUsuRep"
                            value={reparacion?.data?.DescripcionUsuRep || ""}
                            disabled={!admin}
                        />
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">RECEPCIÓN</h5>
                    <div>
                        <label className="form-label">Fecha de Recepción</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="date" 
                            className="form-control" 
                            id="FeRecRep"
                            value={convertTimestampCORTO(reparacion?.data?.FeRecRep)}
                            disabled={!admin}
                        />
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">REVISIÓN - DIAGNÓSTICO Y PRESUPUESTO DATOS</h5>
                    <div>
                        <label className="form-label">Número de Serie</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="text" 
                            className="form-control" 
                            id="NumeroSerieRep"
                            value={reparacion?.data?.NumeroSerieRep || ""}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Observaciones del Técnico</label>
                        <TextareaAutosize
                            onChange={e => changeInputRep(e.target)} 
                            className="form-control" 
                            id="DescripcionTecRep"
                            value={reparacion?.data?.DescripcionTecRep || ""}
                            rows="5"
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Presupuesto Mano de Obra $</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="number" 
                            className="form-control" 
                            id="PresuMoRep" 
                            value={reparacion?.data?.PresuMoRep || ""}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Presupuesto Repuestos $</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="number" 
                            className="form-control" 
                            id="PresuReRep"
                            value={reparacion?.data?.PresuReRep || ""}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Presupuesto Final $</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="number" 
                            className="form-control" 
                            id="PresuFiRep"
                            value={reparacion?.data?.PresuFiRep || ""}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Diagnóstico $</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="number" 
                            className="form-control" 
                            id="PresuDiRep"
                            value={reparacion?.data?.PresuDiRep || ""}
                            disabled={!admin}
                        />
                    </div>
                </div>
            </div>
            { admin ? // Sólo para administrador
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">REPUESTOS - CUALES Y SEGUIMIENTO</h5>
                    <div>
                        <label className="form-label">Qué repuesto, seguimiento, transportista</label>
                        <TextareaAutosize
                            onChange={e => changeInputRep(e.target)} 
                            className="form-control" 
                            id="TxtRepuestosRep"
                            value={reparacion?.data?.TxtRepuestosRep || ""} //Esto es lo correcto
                            rows="5"
                        />
                    </div>
                </div>
            </div>
            : null }
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">REPARACIÓN - DATOS DE LA REPARACIÓN</h5>
                    <div>
                        <label className="form-label">Informe de Reparación o Diagnóstico</label>
                        <TextareaAutosize
                            onChange={e => changeInputRep(e.target)} 
                            className="form-control" 
                            id="InformeRep"
                            value={reparacion?.data?.InformeRep || ""}
                            rows="5"
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Fecha Finalizacion</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="date" 
                            className="form-control" 
                            id="FeFinRep"
                            value={convertTimestampCORTO(reparacion?.data?.FeFinRep)}
                            disabled={!admin}
                        />
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">ENTREGA - DATOS DE LA ENTREGA</h5>
                    <div>
                        <label className="form-label">Fecha Entrega</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="date" 
                            className="form-control" 
                            id="FeEntRep"
                            value={convertTimestampCORTO(reparacion?.data?.FeEntRep)}
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Cliente, Comisionista, Correo, Seguimiento</label>
                        <TextareaAutosize
                            onChange={e => changeInputRep(e.target)} 
                            className="form-control" 
                            id="TxtEntregaRep"
                            value={reparacion?.data?.TxtEntregaRep || ""}
                            rows="5"
                            disabled={!admin}
                        />
                    </div>
                    <div>
                        <label className="form-label">Nro. de Seguimiento</label>
                        <input 
                            onChange={e => changeInputRep(e.target)} 
                            type="text" 
                            className="form-control" 
                            id="SeguimientoEntregaRep"
                            value={reparacion?.data?.SeguimientoEntregaRep || ""}
                            rows="5"
                            disabled={!admin}
                        />
                    </div>
                </div>
            </div>

            { admin ? // Sólo para administrador
            <div className="text-center">
                <button
                    key="botonGuardar"
                    onClick={ handleGuardarReparacion }
                    className="w-100 mb-3 btn bg-bluemcdron text-white"
                >
                    Guardar
                </button>
                <button
                    key="botonEliminar"
                    onClick={ handleEliminarReparacion }
                    className="w-100 btn bg-danger text-white"
                >
                    Eliminar
                </button>
            </div>
            : null }

        </div>
 
    )
}

export default ReparacionPresentational;