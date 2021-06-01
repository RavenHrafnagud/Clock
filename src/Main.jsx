import React from 'react';
import {useEventos} from './hooks/useEventos';

// import { useInterval } from './hooks/useInterval';


function Main() {


const {cortar, sesion, iterador, temporizador, titulo, eventoCortarMenos, eventoCortarMas, eventosesionMenos, eventosesionMas, eventoSeguirParar, eventoReset}=useEventos();


  


  // const [segundos, setSegundos] = useState(1500);
  // const [activo, setActivo] = useState(false);
  // const [cortar, setCortar] = useState(5);
  // const [sesion, setSesion] = useState(25);
  // const [iterador, setIterador] = useState("Session");

  // var tiempo = new Date(0);
  // tiempo.setSeconds(segundos);
  // var temporizador = tiempo.toISOString().substr(14, 5);
  // var titulo = tiempo.toISOString().substr(12, 7);

  // useInterval(() => {

  //   if (segundos <= 0 && iterador==="Session") {
  //     document.getElementById("beep").play();
  //     setSegundos(cortar * 60);
  //     setIterador("Break");
  //   }else if(segundos <= 0 && iterador==="Break"){
  //     document.getElementById("beep").play();
  //     setSegundos(sesion * 60);
  //     setIterador("Session");
  //   } else {
  //     setSegundos(segundos - 1);
  //   }

  // }, activo ? 1000 : null);



  // const eventoCortarMenos = () => {
  //   if (cortar !== 1 && activo !== true) {
  //     setCortar(cortar - 1);
  //   }
  // }

  // const eventoCortarMas = () => {
  //   if (cortar !== 60 && activo !== true) {
  //     setCortar(cortar + 1);
  //   }
  // }

  // const eventosesionMenos = () => {
  //   if (sesion !== 1 && activo !== true) {
  //     setSegundos((sesion * 60) - 60);
  //     setSesion(sesion - 1);
  //   }
  // }

  // const eventosesionMas = () => {
  //   if (sesion !== 60 && activo !== true) {
  //     setSegundos((sesion * 60) + 60);
  //     setSesion(sesion + 1);
  //   }
  // }


  // const eventoSeguirParar = () => {
  //   if (activo === true) {
  //     setActivo(false);
  //   }
  //   if (activo === false) {
  //     setActivo(true);
  //   }
  // }


  // const eventoReset = () => {
  //   setSegundos(1500);
  //   setCortar(5);
  //   setSesion(25);
  //   setActivo(false);
  //   setIterador("Session");
  //   document.getElementById("beep").load();
  // }


  return (
    <main>
      <h1>25 + 5 Clock</h1>
      <section>
        <h1 id="break-label">Break Length</h1>
        <button id="break-decrement" onClick={eventoCortarMenos}>↓</button>
        <span id="break-length">{cortar}</span>
        <button id="break-increment" onClick={eventoCortarMas}>↑</button>
      </section>

      <section>
        <h1 id="session-label">Session Length</h1>
        <button id="session-decrement" onClick={eventosesionMenos}>↓</button>
        <span id="session-length">{sesion}</span>
        <button id="session-increment" onClick={eventosesionMas}>↑</button>
      </section>

      <section>
        <h1 id="timer-label">{iterador}</h1>
        <span id="time-left">{titulo!=="1:00:00"?temporizador:"60:00"}</span>
        <button id="start_stop" onClick={eventoSeguirParar}>►◘</button>
        <button id="reset" onClick={eventoReset}>Ø</button>
        <audio id="beep" preload="auto" controls src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </section>
    </main>
  )
}

export default Main
