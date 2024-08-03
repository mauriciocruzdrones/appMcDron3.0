import Select, { SingleValue } from 'react-select';
import { ClienteType } from '../types/usuario';
import { ChangeEvent } from 'react';
import { InputType, SelectType } from '../types/types';

interface ClientePresentationalProps {
    cliente: ClienteType;
    provinciasSelect: SelectType[];
    localidadesSelect: SelectType[];
    onChangeProvincias: (value: string) => void;
    onChangeLocalidades: (value: string) => void;
    changeInputUsu: (field: string, value: string) => void;
    handleGuardarUsuario: () => void;
    handleEliminarUsuario: () => void;
    handleSendEmail: () => void;
    handleSendSms: () => void;
}

const ClientePresentational = (props: ClientePresentationalProps) => {
    console.log("USUARIO presentational");

    const { 
        cliente,
        provinciasSelect,
        localidadesSelect,
        onChangeProvincias,
        onChangeLocalidades,
        changeInputUsu,
        handleGuardarUsuario,
        handleEliminarUsuario,
        handleSendEmail,
        handleSendSms
    } = props;

    const handleOnChange = (event: ChangeEvent<InputType>) => {
        const target = event.target;

        let value = target.value;
        if(target.type == "date"){
            let anio = Number(target.value.substr(0, 4));
            let mes = Number(target.value.substr(5, 2)) - 1;
            let dia = Number(target.value.substr(8, 2));
            value = String(Number(new Date(anio, mes, dia).getTime()) + 10800001); // Se agrega este número para que de bien la fecha.
        };
        const field = target.id;
        changeInputUsu(field, value);
    }

    const handleOnChangeProvincias = (newValue: SingleValue<SelectType>) => {
        if (!newValue) return;
        onChangeProvincias(newValue.value);
    }

    const handleOnChangeLocalidades = (newValue: SingleValue<SelectType>) => {
        if (!newValue) return;
        onChangeLocalidades(newValue.value);
    }

    return(
        <div
            className="p-4"
            style={{
                backgroundColor: "#EEEEEE"
            }}
        >
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">
                        USUARIO
                    </h3>
                    <div>Nombre: {cliente?.data?.NombreUsu} {cliente?.data?.ApellidoUsu}</div>
                    <div>Email: {cliente?.data?.EmailUsu}</div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                <h5 className="card-title bluemcdron">DATOS DEL USUARIO</h5>
                    <div>
                        <label className="form-label">E-mail</label>
                        <div className="d-flex w-100 justify-content-between">
                            <input 
                                onChange={handleOnChange} 
                                type="text" 
                                className="form-control" 
                                id="EmailUsu" 
                                value={cliente?.data?.EmailUsu || ""}
                            />
                            <button 
                                type="submit" 
                                className="btn btn-outline-secondary bg-bluemcdron text-white" 
                                onClick={handleSendEmail}
                            >
                                <i className="bi bi-envelope"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Nombre</label>
                        <input 
                            onChange={handleOnChange} 
                            type="text" 
                            className="form-control" 
                            id="NombreUsu" 
                            value={cliente?.data?.NombreUsu || ""}
                        />
                    </div>
                    <div>
                        <label className="form-label">Apellido</label>
                        <input 
                            onChange={handleOnChange} 
                            type="text" 
                            className="form-control" 
                            id="ApellidoUsu" 
                            value={cliente?.data?.ApellidoUsu || ""}
                        />
                    </div>
                    <div>
                        <label className="form-label">Teléfono</label>
                        <div className="d-flex w-100 justify-content-between">
                            <input 
                                onChange={handleOnChange} 
                                type="tel" 
                                className="form-control" 
                                id="TelefonoUsu"
                                value={cliente?.data?.TelefonoUsu || ""}
                            />
                            <button 
                                    type="submit" 
                                    className="btn btn-outline-secondary bg-bluemcdron text-white" 
                                    onClick={handleSendSms}
                                >
                                   <i className="bi bi-chat-left-text"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Provincia</label>
                        <Select 
                            options={provinciasSelect}
                            onChange={handleOnChangeProvincias}
                            id="ProvinciaUsu"
                            value={({value: cliente?.data?.ProvinciaUsu, label: cliente?.data?.ProvinciaUsu})}
                        />
                    </div>
                    <div>
                        <label className="form-label">Ciudad</label>
                        <Select 
                            options={localidadesSelect}
                            onChange={handleOnChangeLocalidades}
                            id="CiudadUsu"
                            value={{value: cliente?.data?.CiudadUsu, label: cliente?.data?.CiudadUsu}}
                        />
                    </div>
                </div>
            </div>


           <div className="text-center">
                <button 
                    onClick={ handleGuardarUsuario }
                    className="w-100 mb-3 btn bg-bluemcdron text-white"
                >
                    Guardar
                </button>
                <button 
                    onClick={ handleEliminarUsuario }
                    className="w-100 btn bg-danger text-white"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ClientePresentational;