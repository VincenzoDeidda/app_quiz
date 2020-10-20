import React, { Fragment } from "react";
export default function Istruzioni() {
  return (
    <Fragment>
      <div>
        <div>
          <div>
              <h2 className="container-title">Come si gioca</h2>
                <div className="container-istruction">
              <p className="cnt-istruzioni">
                Le regole del gioco sono molto semplici:<br></br> 1. Al
                concorrente verranno presentate una alla volta 10 domande{" "}
                <br></br> 2. Ad ogni domanda corrispondono 4 risposte di cui
                solo una è quella esatta <br></br> 3. Il concorrente ha 20 secondi
                 per rispondere ad ogni domanda <svg width="1em" height="1em" viewBox="0 0 17 17" class="bi bi-alarm" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                </svg>
                <br></br> 4. Il concorrente vince se indovina tutte le 10 domande 
                <br></br>5. Il concorrente ha disposizione un <button id="bnt-1" className="btn btn-danger btn-lg active">
                extraTime 10s </button> utilizzabili una sola volta 
                <br></br><br></br> <h2> Buona Fortuna!!</h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


