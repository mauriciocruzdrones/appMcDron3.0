/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    notificacionesPorMensajesPersistencia,
    actualizarLeidosPersistencia
} from '../persistencia/persistenciaFirebase';
import { HttpMethod } from '../types/httpMethods';

export const convertTimestampCORTO = (timestamp) => {
    let d = new Date(parseInt(timestamp) * 1), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2);
    let time = yyyy + '-' + mm + '-' + dd;

    return time;
};

export const actualizarLeidos = (mensajesLeidos) => {
    actualizarLeidosPersistencia(mensajesLeidos);
}

export const notificacionesPorMensajes = (EmailUsu) => {
    notificacionesPorMensajesPersistencia(EmailUsu);
}

export const enviarEmail = (data) => {
    // eslint-disable-next-line no-undef
    cordova.plugins.email.open({
        ...data,
        body: data.body,
    });
}

export const callEndpoint = async (params) => {
    const {
        url,
        method = HttpMethod.GET,
        body = null,
        apiKey = process.env.REACT_APP_ENDPOINT_API_KEY
    } = params;

    try {
        // Configuración básica de los headers
        const headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey, // Agregamos la API Key al header
        };

        // Configuración de la solicitud
        const options = {
            method,
            headers,
        };

        // Si el método tiene un cuerpo (POST, PUT, etc.), lo añadimos
        if (body) {
            options.body = JSON.stringify(body);
        }

        // Realizamos la solicitud
        const response = await fetch(url, options);

        // Comprobamos si la respuesta es exitosa
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al llamar al endpoint');
        }

        // Retornamos los datos en formato JSON
        return await response.json();
    } catch (error) {
        console.error('Error al llamar al endpoint:', error.message);
        return null;
    }
};


export const enviarSms = ({ number, message, options, success, error }) => {
    // eslint-disable-next-line no-undef
    sms.send(number, message, options, success, error);
}

export const triggerNotification = ({ title, text, foreground, vibrate }) => {
    console.log("envia notificacion");
    if (window.cordova) {
        // eslint-disable-next-line no-undef
        cordova.plugins.notification.local.schedule({
            title: title,
            text: text,
            foreground: foreground,
            vibrate: vibrate
        });
    }
}

export async function OpenaiFetchAPI(prompt) {
    const api_key_openai = process.env.REACT_APP_API_KEY_OPENAI;
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key_openai}`
            },
            body: JSON.stringify({
                "model": "gpt-4o",
                "messages": [
                    {
                        "role": "system",
                        "content": "Cuando respondas, no digas claro, ni por supuesto, ni nada de eso."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0,
                "max_tokens": 500,
            })
        });
        return response.json().then(data => {
            return data['choices'][0].message.content
        });
    } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error);
        return 'No se pudo generar un diagnóstico automático.';
    }
}
