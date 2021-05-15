//quiz
//signIn / logout
//
import React, { useState, useEffect } from "react";
// import { domande } from "./Domande";
import ExtraTime from './ExtraTime/ExtraTime';
import Time from "./Time";
import Question from "./Questions/Question";



export default function Gioco(props) {
  const fn = 1;
  //Hook State
  const [currentQuestion, setCurrentQuestion]= useState([]);
  const [domandaCorrente, setDomandaCorrente] = useState(0);
  const [mostraPunteggio, setMostraPunteggio] = useState(false);
  const [punteggio, setPunteggio] = useState(0);
  const [winner, setWinner] = useState(null);
  const [extTime, setExtTime] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);

  //funzione che esegue refresh del gioco, senta ricaricare tutta la pagina, invocato tramite eventoclick
  function refreshPage() {
  setDomandaCorrente(0);
     setMostraPunteggio(false);
     setPunteggio(0);
    setWinner(null);
    setTimeLeft(20);
    setExtTime(true)
    }

  // effetto di caricamento iniziale del gioco e delle successive variazioni a seconda delle condizioni
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
      setMostraPunteggio(true);
      setWinner(false);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  //funzione che gestisce l'evento successivo al click sulla risposta, in base alle condizioni manda avanti il gioco oppure lo interrompe

  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setPunteggio(punteggio + 1);
  //     const nextDomanda = domandaCorrente + 1;
  //     //condizione che si verifica se il giocatore ha risposto giusto
  //     if (nextDomanda < domande.length) {
  //       setDomandaCorrente(nextDomanda);
  //       setTimeLeft(20);

  // //condizione che si verifica se il giocatore ha risposto giusto a tutte le risposte
  // } else {
  //   setMostraPunteggio(true);
  //   setWinner(true);
  //   setTimeLeft(null);
  // }
  // //condizione che si verifica se il giocatore ha sbagliato
  //   } else {
  //     setMostraPunteggio(true);
  //     setWinner(false);
  //     setTimeLeft(null);
  //   }
  // };

  return (
    <div class="container-gioco">
      <h1>Giochiamo!!</h1>
      <div className="app">
        {mostraPunteggio ? (
          <div className="punteggio">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {winner ? (
              <h1 className="btn-success">
                {" "}
                HAI VINTO!!<br></br>Carlo Conti is dead, long live Carlo Conti.
              </h1>
            ) : (
              <h1 className="btn-danger">Hai perso!!! Mi dispiace!</h1>
            )}
            <h3>Il tuo punteggio è {punteggio} di 10</h3>
            <div className="container-refresh">
              <button className="btn btn-danger btn-lg active"onClick={refreshPage}>
                Gioca di nuovo
              </button> 
            </div>
          </div>
        ) : (
          <>
            <div className="domanda">
              <div className="col-5 col-sm-5">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  class="bi bi-alarm"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                  />
                </svg>
                
                <Time
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  setMostraPunteggio={setMostraPunteggio}
                  setWinner={setWinner}
                />
              </div>
              <div className="conta-domanda">
                {/* <span>Domanda {domandaCorrente + 1}</span>/{domande.length} */}
              </div>
              <div>
                <div className="testo-domanda">
                <Question
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                ></Question>
                </div>
              </div>
              <div className="row">
                {/* creazione delle opzioni di risposta */}
                
              </div>
              {/* creazione dell'opzione extraTime e tramite operatore ternario disabilito il bottone dopo il primo click */}
                <ExtraTime
                extTime = {extTime}
                setExtTime={setExtTime}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
