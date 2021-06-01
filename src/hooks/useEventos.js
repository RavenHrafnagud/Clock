import {useTemporizador} from './useTemporizador';


export function useEventos() {

    const {segundos, setSegundos, activo, setActivo, cortar, setCortar, sesion, setSesion, iterador, setIterador, temporizador, titulo }=useTemporizador();

    const eventoCortarMenos = () => {
        if (cortar !== 1 && activo !== true) {
          setCortar(cortar - 1);
        }
      }
    
      const eventoCortarMas = () => {
        if (cortar !== 60 && activo !== true) {
          setCortar(cortar + 1);
        }
      }
    
      const eventosesionMenos = () => {
        if (sesion !== 1 && activo !== true) {
          setSegundos((sesion * 60) - 60);
          setSesion(sesion - 1);
        }
      }
    
      const eventosesionMas = () => {
        if (sesion !== 60 && activo !== true) {
          setSegundos((sesion * 60) + 60);
          setSesion(sesion + 1);
        }
      }
    
    
      const eventoSeguirParar = () => {
        if (activo === true) {
          setActivo(false);
        }
        if (activo === false) {
          setActivo(true);
        }
      }
    
    
      const eventoReset = () => {
        setSegundos(1500);
        setCortar(5);
        setSesion(25);
        setActivo(false);
        setIterador("Session");
        document.getElementById("beep").load();
      }

    return {segundos, cortar, sesion, iterador, temporizador, titulo, eventoCortarMenos, eventoCortarMas, eventosesionMenos, eventosesionMas, eventoSeguirParar, eventoReset}
}
