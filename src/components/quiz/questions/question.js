import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import db from "../../firebase";
import { ReactReduxContext } from "react-redux";

const Question = ({ currentQuestion, setCurrentQuestion }) => {
  const startRef = firebase.database().ref();
  startRef
    .child("questions/result/0")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        setCurrentQuestion(snapshot.val());
        //  console.log(currentQuestion.question)
      } else {
        console.log("nodata");
      }
    });
  let itemToRender;
  if (currentQuestion.answers) {
    itemToRender = currentQuestion.answers.map((answers) => {
      return <button>{answers.answer}</button>;
    });
  }
  return <div>{itemToRender}</div>;
};

export default Question;
