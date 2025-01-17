// Módulo para conectar con redux
import { connect } from "react-redux";
// Actions
import { logout, confirm } from "../redux/root-actions";
// Componentes

import { Navbar } from 'react-bootstrap';
import { ArrowLeftShort } from 'react-bootstrap-icons';

// Esta función no debería salir de acá...
import { notificacionesPorMensajesPersistencia } from '../persistencia/persistenciaFirebase';

import history from "../history";
import { RootState } from "../redux/App/App.reducer";
import { Usuario } from "../types/usuario";

interface NavMcDronProps {
    usuario: Usuario;
    logout: () => void;
    confirm: (message: string, title: string, type: string, callback: () => void) => void;
}

const NavMcDron = (props: NavMcDronProps) => {
    const { usuario, logout, confirm } = props;

    console.log("NavMcDron");

    // Esto hay que ver donde lo ponemos...
    notificacionesPorMensajesPersistencia(usuario.data.EmailUsu);

    const handleBack = () => {
        if (history.location.pathname == "/inicio"){
            confirm("Desloguearse???", "Atención", "warning", () => {
                localStorage.removeItem('loginData');
                logout();
            });
        }else{
            history.goBack()
        }
    }

    return (
        <Navbar sticky="top" className="bg-bluemcdron d-flex justify-content-between px-2">
            <ArrowLeftShort 
                width="50" 
                height="50"
                onClick={handleBack}
                color="white"
            />
            <h4 className="text-white m-0 float-left">
                Hola {usuario?.data?.NombreUsu || "amigo"}!
            </h4>
            {/* <div 
                className="imageContainer rounded-circle float-right"
                width="50" 
                height="50"
            > */}
                <img 
                    src={usuario?.data?.UrlFotoUsu || "./img/logo1.png"}
                    width="50" 
                    // height="50"
                    className="rounded-circle float-right" 
                    alt="Foto del usuario"
                />
            {/* </div> */}
        </Navbar>
    )
};

const mapStateToProps = (state: RootState) => ({
    usuario: state.app?.usuario
});

export default connect(mapStateToProps, { logout, confirm })(NavMcDron);