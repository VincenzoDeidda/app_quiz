import React , {useEffect} from 'react';

  
  const Time =  ({timeLeft, setTimeLeft, setWinner, setMostraPunteggio})=> {
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
    
    return  <div> {timeLeft} </div>;
  }
export default Time;