  import React, {useEffect} from 'react';
  import axios from 'axios';

  export const domande = () =>{
    useEffect(() => {
      console.log('effect')
      axios.get('https://react-my-burger-65cca-default-rtdb.firebaseio.com/')
        .then(response => {
          console.log('promise fulfilled')
          setHeroes(response.data)
        })
    }, [])
  }


  // export const domande = [
  //   {
  //     testoDomanda: "Di che colore è il cavallo bianco di Napoleone",
  //     risposte: [
  //       { testoRisposta: "Nero", isCorrect: false },
  //       { testoRisposta: "Marrone", isCorrect: false },
  //       { testoRisposta: "Bianco", isCorrect: true },
  //       { testoRisposta: "Verde", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Chi nella storia è stata premiata per tre volte con il Premio Nobel per la Pace?",
  //     risposte: [
  //       { testoRisposta: "il Papa", isCorrect: false },
  //       { testoRisposta: "Rita Levi Montalcini", isCorrect: false },
  //       { testoRisposta: "La crocce rossa internazionale  ", isCorrect: true },
  //       { testoRisposta: "Nessuno", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Chi sono i due più celebri fratelli sportivi di Castellammare di Stabia?",
  //     risposte: [
  //       { testoRisposta: "Brundu", isCorrect: false },
  //       { testoRisposta: "Rossi", isCorrect: false },
  //       { testoRisposta: "Abbagnale", isCorrect: true },
  //       { testoRisposta: "Ciccone", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Quale animale sarebbe il miglior compagno dell'uomo nello spazio?",
  //     risposte: [
  //       { testoRisposta: "Cane", isCorrect: false },
  //       { testoRisposta: "Gatto", isCorrect: false },
  //       { testoRisposta: "Capra", isCorrect: true },
  //       { testoRisposta: "Antilope", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Cosa indica la sigla GPL?",
  //     risposte: [
  //       { testoRisposta: "gas propellente liquido", isCorrect: false },
  //       { testoRisposta: "gas proporzionato liquido", isCorrect: false },
  //       { testoRisposta: "gas propano liquefatto", isCorrect: true },
  //       { testoRisposta: "gas possibilmente liquido", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Quale resina fossilizzata usavano Greci e Romani per fare giolielli? ",
  //     risposte: [
  //       { testoRisposta: "nessuna", isCorrect: false },
  //       { testoRisposta: "Sandracca", isCorrect: false },
  //       { testoRisposta: "ambra", isCorrect: true },
  //       { testoRisposta: "Mastice", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Quanti sono i giocatori di una squadra di pallamano? ",
  //     risposte: [
  //       { testoRisposta: "6", isCorrect: false },
  //       { testoRisposta: "9", isCorrect: false },
  //       { testoRisposta: "7", isCorrect: true },
  //       { testoRisposta: "11", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "In quale stagione si svolge sogno di una notte di mezz'estate?",
  //     risposte: [
  //       { testoRisposta: "Inverno", isCorrect: false },
  //       { testoRisposta: "Estate", isCorrect: false },
  //       { testoRisposta: "Primavera", isCorrect: true },
  //       { testoRisposta: "Autunno", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Boise è la capitale di quale stato degli USA?",
  //     risposte: [
  //       { testoRisposta: "California", isCorrect: false },
  //       { testoRisposta: "non esiste", isCorrect: false },
  //       { testoRisposta: "Idaho", isCorrect: true },
  //       { testoRisposta: "Montana", isCorrect: false },
  //     ],
  //   },
  //   {
  //     testoDomanda: "Quale società segreta statunitense è nota per le croci in fiamme? ",
  //     risposte: [
  //       { testoRisposta: "nessuna", isCorrect: false },
  //       { testoRisposta: "bim bum bam", isCorrect: false },
  //       { testoRisposta: "Ku Klux Klan", isCorrect: true },
  //       { testoRisposta: "Teletubbies", isCorrect: false },
  //     ],
  //   },
  // ];
