import React from 'react';
import { useEventos } from './hooks/useEventos';

function Main() {

  const { cortar, sesion, iterador, temporizador, titulo, eventoCortarMenos, eventoCortarMas, eventosesionMenos, eventosesionMas, eventoSeguirParar, eventoReset } = useEventos();

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
        <span id="time-left">{titulo !== "1:00:00" ? temporizador : "60:00"}</span>
        <button id="start_stop" onClick={eventoSeguirParar}>►◘</button>
        <button id="reset" onClick={eventoReset}>Ø</button>
        <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </section>
    </main>
  )
}

export default Main
