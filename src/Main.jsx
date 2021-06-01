import React from 'react';
import { useEventos } from './hooks/useEventos';
import { Contenedor, Titulo, Seccion, Numeros, Botones, Reloj, Borde } from './styles/style.jsx';

function Main() {

  const { cortar, sesion, iterador, temporizador, titulo, eventoCortarMenos, eventoCortarMas, eventosesionMenos, eventosesionMas, eventoSeguirParar, eventoReset } = useEventos();

  return (
    <Contenedor>
      <Titulo principal>25 + 5 Clock</Titulo>
      <Seccion corteTiempo>
        <Titulo subTitulo id="break-label">Break Length</Titulo>
        <Botones id="break-decrement" onClick={eventoCortarMenos}>↓</Botones>
        <Numeros id="break-length">{cortar}</Numeros>
        <Botones id="break-increment" onClick={eventoCortarMas}>↑</Botones>
      </Seccion>

      <Seccion sesionTiempo>
        <Titulo subTitulo id="session-label">Session Length</Titulo>
        <Botones id="session-decrement" onClick={eventosesionMenos}>↓</Botones>
        <Numeros id="session-length">{sesion}</Numeros>
        <Botones id="session-increment" onClick={eventosesionMas}>↑</Botones>
      </Seccion>

      <Seccion relojTiempo>
        <Borde>
          <Titulo subTitulo id="timer-label">{iterador}</Titulo>
          <Reloj id="time-left">{titulo !== "1:00:00" ? temporizador : "60:00"}</Reloj>
          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </Borde>
        <Botones id="start_stop" onClick={eventoSeguirParar}>►◘</Botones>
        <Botones id="reset" onClick={eventoReset}>Ø</Botones>
      </Seccion>
    </Contenedor>
  )
}

export default Main
