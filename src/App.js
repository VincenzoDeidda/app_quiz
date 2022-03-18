import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../src/styles/app.css";
import Gioco from "../src/components/quiz/Gioco";
import Istruzioni from "../src/components/quiz/Istruzioni";
  

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz--L'eredità--</title>
      </Helmet>
      <h1>Quiz L'Eredità</h1>
      <br></br>
      <br></br>
      <Router>
        <div className="container-link">
          <Link
            id="link-1"
            className="btn btn-primary btn-lg active col-4 col-sm-4"
            to="/quiz/Gioco">
            Gioca
          </Link>
          <Link
            id="link-2"
            className="btn btn-primary btn-lg active col-4 col-sm-4"
            to="/quiz/Istruzioni">
            Istruzioni
          </Link>
        </div>
        <br></br>
        <div className="container-route">
          <div>
            <Route path="/quiz/Istruzioni">
              <Istruzioni />
            </Route>
          </div>
          <div>
            <Route className="c-gioco" path="/quiz/Gioco">
              <Gioco />
            </Route>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}
