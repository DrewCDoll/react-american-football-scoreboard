//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
// import Buttons from "./Buttons"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const initialHomeState = 0;
  const initialAwayState = 0;
  const [hScore, setHScore] = useState(initialHomeState);
  const [aScore, setAScore] = useState(initialAwayState);
  const quarter = 1;
  const [qtr, setQtr] = useState(quarter);
  const [min, setMin] = useState(15);
  const [tSec, setTSec] = useState(0);
  const [sec, setSec] = useState(0);


  // useEffect(() => {
  //     const timer =
  //        min > 0 && setInterval(() => {
  //          setCounter(counter - 1)
          
          
  //         }, 1000);
  //     return () => clearInterval(timer);
  //   }, [counter]);




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{hScore}</div>
          </div>
          <div className="timer">{min}:{tSec}{sec}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{aScore}</div>
          </div>
        </div>
        <BottomRow qtr={qtr}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHScore(hScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHScore(hScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAScore(aScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAScore(aScore + 3)}>Away Field Goal</button>
        </div>
        <div className="quarterButtons">
          <button className="quarterButtons__advance" onClick={() => {
            if (qtr < 4) {
              setQtr(qtr + 1)
            } else {
              setQtr(quarter)
            }
          }
          }>Advance Quarter</button>
          <button className="quarterButtons_reset" onClick={() => setQtr(quarter)}>Reset Quarter</button>
        </div>
        <div className='timerButtons'>
        <button className="timer__start" /*onClick={() => {timer}}*/>Start Clock</button>
          <button className="timer_reset" /*onClick={() => {timer}}*/>Reset Clock</button>
        </div>
      </section>
    </div>
  );
}

export default App;
