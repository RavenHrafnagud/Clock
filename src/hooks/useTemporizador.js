import { useState } from "react";
import { useInterval } from './useInterval';

export function useTemporizador() {

    const [segundos, setSegundos] = useState(1500);
    const [activo, setActivo] = useState(false);
    const [cortar, setCortar] = useState(5);
    const [sesion, setSesion] = useState(25);
    const [iterador, setIterador] = useState("Session");

    var tiempo = new Date(0);
    tiempo.setSeconds(segundos);
    var temporizador = tiempo.toISOString().substr(14, 5);
    var titulo = tiempo.toISOString().substr(12, 7);

    useInterval(() => {

        if (segundos <= 0 && iterador === "Session") {
            document.getElementById("beep").play();
            setSegundos(cortar * 60);
            setIterador("Break");
        } else if (segundos <= 0 && iterador === "Break") {
            document.getElementById("beep").play();
            setSegundos(sesion * 60);
            setIterador("Session");
        } else {
            setSegundos(segundos - 1);
        }

    }, activo ? 1000 : null);

    return { segundos, setSegundos, activo, setActivo, cortar, setCortar, sesion, setSesion, iterador, setIterador, temporizador, titulo }
}
